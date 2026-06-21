import React, { useState } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { X, Mail, Lock, User, CheckCircle, ArrowRight, Loader2, Sparkles } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: any) => void;
}

type AuthTab = "signin" | "signup" | "reset";

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<AuthTab>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      if (activeTab === "signin") {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Ensure Firestore user profile entry exists
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
          await setDoc(userDocRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || email.split("@")[0],
            createdAt: new Date().toISOString(),
            generationCount: 0
          });
        }
        onSuccess(user);
        onClose();
      } else if (activeTab === "signup") {
        if (!displayName.trim()) {
          setError("Name is required");
          setLoading(false);
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update display name
        await updateProfile(user, { displayName });

        // Seed Firestore profile
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: displayName,
          createdAt: new Date().toISOString(),
          generationCount: 0
        });

        onSuccess(user);
        onClose();
      } else if (activeTab === "reset") {
        await sendPasswordResetEmail(auth, email);
        setSuccessMsg("Instructions to reset your password have been dispatched to your email address.");
        setPassword("");
      }
    } catch (err: any) {
      console.error("Firebase Authentication Error:", err);
      let localizedMsg = err.message;
      if (err.code === "auth/user-not-found") {
        localizedMsg = "No account found matching this email.";
      } else if (err.code === "auth/wrong-password") {
        localizedMsg = "Incorrect passcode credentials, please retry.";
      } else if (err.code === "auth/email-already-in-use") {
        localizedMsg = "An account with this email address already is active.";
      } else if (err.code === "auth/weak-password") {
        localizedMsg = "Password needs to be at least 6 characters in length.";
      } else if (err.code === "auth/invalid-email") {
        localizedMsg = "The email address layout is invalid.";
      }
      setError(localizedMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      {/* Container Box */}
      <div
        id="auth-modal-container"
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-zinc-950 border border-gray-100 dark:border-zinc-900 shadow-2xl transition-all duration-300"
      >
        {/* Glow Header */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-600 to-cyan-500 animate-gradient-xy"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:text-zinc-500 dark:hover:text-zinc-300 dark:hover:bg-zinc-900 transition-all"
          title="Close Authentication Window"
        >
          <X size={18} />
        </button>

        {/* Form Body */}
        <div className="p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500">
              <Sparkles size={20} className="animate-pulse" />
            </span>
            <div>
              <h3 className="text-xl font-bold font-sans text-gray-900 dark:text-white">
                {activeTab === "signin" && "Welcome Creator"}
                {activeTab === "signup" && "Launch Setup"}
                {activeTab === "reset" && "Passcode Reset"}
              </h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400">
                {activeTab === "signin" && "Authenticate to store your generations and draft logs"}
                {activeTab === "signup" && "Make your real credentials and start building custom drafts"}
                {activeTab === "reset" && "We'll send you standard instructions to regain account links"}
              </p>
            </div>
          </div>

          {/* Feedback banners */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-450 text-xs font-medium">
              {error}
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-450 text-xs font-medium flex gap-2">
              <CheckCircle size={16} className="shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            {activeTab === "signup" && (
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 mb-1">
                  Your Creator Handle / Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3.5 text-gray-400 dark:text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="Marcus Sterling"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-zinc-850 dark:bg-zinc-900/40 text-gray-950 dark:text-white placeholder-gray-400 focus:ring-1.5 focus:ring-indigo-500 focus:outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 mb-1">
                Registered Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-3.5 text-gray-400 dark:text-zinc-500" />
                <input
                  type="email"
                  required
                  placeholder="name@creator.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-zinc-850 dark:bg-zinc-900/40 text-gray-950 dark:text-white placeholder-gray-400 focus:ring-1.5 focus:ring-indigo-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {activeTab !== "reset" && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300">
                    Security Password
                  </label>
                  {activeTab === "signin" && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("reset");
                        setError(null);
                        setSuccessMsg(null);
                      }}
                      className="text-2xs font-semibold text-indigo-500 hover:text-indigo-600 hover:underline transition-colors focus:outline-none"
                    >
                      Forgotten credentials?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-3.5 text-gray-400 dark:text-zinc-500" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-zinc-850 dark:bg-zinc-900/40 text-gray-950 dark:text-white placeholder-gray-400 focus:ring-1.5 focus:ring-indigo-500 focus:outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/10 active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none flex items-center justify-center gap-1.5 mt-2"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  {activeTab === "signin" && "Authenticate Account"}
                  {activeTab === "signup" && "Setup New Core Space"}
                  {activeTab === "reset" && "Dispatch Code Link"}
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Bottom Tabs Toggle */}
          <div className="mt-6 pt-5 border-t border-gray-200/50 dark:border-zinc-900/50 text-center">
            {activeTab === "signin" && (
              <p className="text-xs text-gray-500 dark:text-zinc-400">
                New to the toolkit ecosystem?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("signup");
                    setError(null);
                    setSuccessMsg(null);
                  }}
                  className="font-bold text-indigo-500 hover:indigo-600 underline focus:outline-none"
                >
                  Register Space Free
                </button>
              </p>
            )}

            {activeTab === "signup" && (
              <p className="text-xs text-gray-500 dark:text-zinc-400">
                Already have a creator credentials space?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("signin");
                    setError(null);
                    setSuccessMsg(null);
                  }}
                  className="font-bold text-indigo-500 hover:indigo-600 underline focus:outline-none"
                >
                  Sign In Instead
                </button>
              </p>
            )}

            {activeTab === "reset" && (
              <p className="text-xs text-gray-500 dark:text-zinc-400">
                Wait, I recall my passcode!{" "}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("signin");
                    setError(null);
                    setSuccessMsg(null);
                  }}
                  className="font-bold text-indigo-500 hover:indigo-600 underline focus:outline-none"
                >
                  Login Interface
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
