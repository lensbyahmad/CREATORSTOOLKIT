/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

// Import Pages
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [blogPostSlug, setBlogPostSlug] = useState<string | null>(null);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Bind Firebase Authentication state dynamically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // Monitor deep URL hash router trigger properties
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("blog-")) {
        setCurrentPage("blog");
        setBlogPostSlug(hash.replace("blog-", ""));
      } else if (hash) {
        setCurrentPage(hash);
        setBlogPostSlug(null);
      } else {
        setCurrentPage("home");
        setBlogPostSlug(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Invoke on mount to match initial links

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle page changes gracefully
  const navigateTo = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
    setBlogPostSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle precise blog slug parameters
  const navigateToBlogPost = (slug: string) => {
    window.location.hash = `blog-${slug}`;
    setCurrentPage("blog");
    setBlogPostSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dark light mode class toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      darkMode ? "bg-zinc-950 text-zinc-100" : "bg-gray-50/20 text-gray-900"
    }`}>
      {/* Navigation Layer */}
      <Navigation
        user={user}
        onOpenAuth={() => setAuthModalOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Pages Router Section */}
      <main className="flex-1">
        {currentPage === "home" && (
          <Home
            onNavigate={navigateTo}
            onNavigateToBlogPost={navigateToBlogPost}
            onOpenAuth={() => setAuthModalOpen(true)}
            user={user}
          />
        )}
        {currentPage === "tools" && (
          <Tools
            user={user}
            onOpenAuth={() => setAuthModalOpen(true)}
          />
        )}
        {currentPage === "blog" && (
          <Blog
            onNavigateToBlogPost={navigateToBlogPost}
            selectedPostSlug={blogPostSlug}
            onBackToBlogList={() => navigateTo("blog")}
          />
        )}
        {currentPage === "about" && (
          <About
            onNavigate={navigateTo}
          />
        )}
        {currentPage === "contact" && (
          <Contact />
        )}
        {currentPage === "privacy" && (
          <Privacy />
        )}
      </main>

      {/* Footer Compliance Layer */}
      <Footer onNavigate={navigateTo} />

      {/* Authentication Gateway dialog */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(firebaseUser) => setUser(firebaseUser)}
      />
    </div>
  );
}
