/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Lazy Import Pages
const Home = lazy(() => import("./pages/Home"));
const Tools = lazy(() => import("./pages/Tools"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Faqs = lazy(() => import("./pages/Faqs"));
import { BLOG_POSTS } from "./data/blog";

import CookieConsent from "./components/CookieConsent";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [blogPostSlug, setBlogPostSlug] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const validRoutes = ["home", "tools", "ai-tools", "blog", "about", "about-us", "contact", "contact-us", "privacy", "privacy-policy", "disclaimer", "faqs", "faq", "404"];

  // Monitor deep URL hash router trigger properties
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("blog-")) {
        setCurrentPage("blog");
        setBlogPostSlug(hash.replace("blog-", ""));
      } else if (hash && validRoutes.includes(hash)) {
        setCurrentPage(hash);
        setBlogPostSlug(null);
      } else if (hash) {
        setCurrentPage("404");
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

  // Determine metadata based on current page
  let pageTitle = "CreatorsToolkit - Free AI Tools for Content Creators | YouTube, Photography & Ecommerce";
  let pageDescription = "Free AI tools for content creators. Generate YouTube titles, captions, hashtags, scripts, product descriptions and more. No signup required. Start creating better content today!";
  let pageKeywords = "AI tools, content creator tools, YouTube title generator, caption generator, hashtag generator, free AI tools, photography tools, ecommerce tools";
  let canonicalUrl = "https://creatorstoolkit.online/";

  if (currentPage === "tools" || currentPage === "ai-tools") {
    pageTitle = "Free AI Tools for Creators - YouTube, Photography & Ecommerce | CreatorsToolkit";
    pageDescription = "20+ free AI tools for content creators. YouTube title generator, caption generator, hashtag generator, script writer, product description generator and more!";
    canonicalUrl = "https://creatorstoolkit.online/#ai-tools";
  } else if (currentPage === "blog") {
    if (blogPostSlug) {
      const post = BLOG_POSTS.find(p => p.slug === blogPostSlug);
      if (post) {
        pageTitle = `${post.title} | CreatorsToolkit`;
        pageDescription = post.excerpt;
        canonicalUrl = `https://creatorstoolkit.online/#blog-${blogPostSlug}`;
      } else {
        pageTitle = "Blog Post | CreatorsToolkit";
        pageDescription = "Read the latest tips, strategies, and updates for digital creators.";
        canonicalUrl = `https://creatorstoolkit.online/#blog`;
      }
    } else {
      pageTitle = "Content Creation Tips & AI Tools Blog | CreatorsToolkit";
      pageDescription = "Learn how to grow your YouTube channel, photography business and ecommerce store using free AI tools. Tips, tricks and strategies for content creators.";
      canonicalUrl = "https://creatorstoolkit.online/#blog";
    }
  } else if (currentPage === "about" || currentPage === "about-us") {
    pageTitle = "About CreatorsToolkit - AI Tools Platform for Content Creators";
    pageDescription = "CreatorsToolkit is a free AI tools platform built for YouTube creators, photographers and ecommerce sellers. Based in London, UK.";
    canonicalUrl = "https://creatorstoolkit.online/#about-us";
  } else if (currentPage === "contact" || currentPage === "contact-us") {
    pageTitle = "Contact CreatorsToolkit - Get in Touch";
    pageDescription = "Contact CreatorsToolkit team. Email: creatorstoolkitonline@gmail.com. Based in London, UK.";
    canonicalUrl = "https://creatorstoolkit.online/#contact-us";
  } else if (currentPage === "privacy" || currentPage === "privacy-policy") {
    pageTitle = "Privacy Policy - CreatorsToolkit";
    pageDescription = "Read our privacy policy to understand how we handle your data and protect your personal information.";
    canonicalUrl = "https://creatorstoolkit.online/#privacy-policy";
  } else if (currentPage === "disclaimer") {
    pageTitle = "Disclaimer - CreatorsToolkit";
    pageDescription = "Read our disclaimer regarding the use of CreatorsToolkit tools and content.";
    canonicalUrl = "https://creatorstoolkit.online/#disclaimer";
  } else if (currentPage === "faqs" || currentPage === "faq") {
    pageTitle = "Frequently Asked Questions - CreatorsToolkit AI Tools";
    pageDescription = "Got questions about CreatorsToolkit? Find answers about our free AI tools for content creators, YouTube, photography and ecommerce.";
    canonicalUrl = "https://creatorstoolkit.online/#faq";
  } else if (currentPage === "404") {
    pageTitle = "Page Not Found - CreatorsToolkit";
    pageDescription = "The page you are looking for does not exist or has been moved.";
    canonicalUrl = "https://creatorstoolkit.online/";
  }

  // Schema Markup string
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://creatorstoolkit.online/#website",
        "url": "https://creatorstoolkit.online/",
        "name": "CreatorsToolkit",
        "description": "Free AI tools for content creators. Generate YouTube titles, captions, hashtags, scripts, product descriptions and more.",
        "publisher": {
          "@id": "https://creatorstoolkit.online/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://creatorstoolkit.online/#organization",
        "name": "CreatorsToolkit",
        "url": "https://creatorstoolkit.online/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://creatorstoolkit.online/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "creatorstoolkitonline@gmail.com",
          "contactType": "customer support"
        },
        "location": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "UK"
        }
      }
    ]
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      darkMode ? "bg-zinc-950 text-zinc-100" : "bg-[#f5f5f5] text-gray-900"
    }`}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://creatorstoolkit.online/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://creatorstoolkit.online/og-image.jpg" />
        
        {/* Canonical & Robots & Site Verification */}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-google-site-verification-string-here" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Navigation Layer */}
      <Navigation
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Pages Router Section */}
      <main className="flex-1">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        }>
          {(currentPage === "home" || currentPage === "") && (
            <Home
              onNavigate={navigateTo}
              onNavigateToBlogPost={navigateToBlogPost}
            />
          )}
          {(currentPage === "tools" || currentPage === "ai-tools") && (
            <Tools
            />
          )}
          {(currentPage === "blog") && (
            <Blog
              onNavigateToBlogPost={navigateToBlogPost}
              selectedPostSlug={blogPostSlug}
              onBackToBlogList={() => navigateTo("blog")}
            />
          )}
          {(currentPage === "about" || currentPage === "about-us") && (
            <About
              onNavigate={navigateTo}
            />
          )}
          {(currentPage === "contact" || currentPage === "contact-us") && (
            <Contact />
          )}
          {(currentPage === "privacy" || currentPage === "privacy-policy") && (
            <Privacy />
          )}
          {currentPage === "disclaimer" && (
            <Disclaimer />
          )}
          {(currentPage === "faqs" || currentPage === "faq") && (
            <Faqs />
          )}
          {currentPage === "404" && (
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
              <h1 className="text-6xl font-black text-indigo-600 dark:text-indigo-500 mb-4">404</h1>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
              <p className="text-gray-700 dark:text-zinc-400 max-w-md mx-auto mb-8">
                We couldn't find the page you were looking for. It might have been moved or deleted.
              </p>
              <button
                onClick={() => navigateTo("home")}
                className="py-3 px-8 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Return to Home
              </button>
            </div>
          )}
        </Suspense>
      </main>

      {/* Footer Compliance Layer */}
      <Footer onNavigate={navigateTo} />
      
      <CookieConsent />
    </div>
  );
}
