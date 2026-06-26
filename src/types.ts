export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  createdAt: string;
  generationCount: number;
}

export type ToolType = "youtube-title" | "caption" | "hashtag" | "script" | "blog-idea" | "content-calendar" | "viral-score" | "competitor-analysis" | "thumbnail-text" | "repurpose" | "niche-finder" | "brand-name" | "hook-generator";

export interface ToolInputField {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "checkbox";
  placeholder?: string;
  defaultValue?: string | boolean | number;
  options?: string[];
  helpText?: string;
}

export interface ToolDefinition {
  id: ToolType;
  name: string;
  description: string;
  icon: string; // lucide class name name mapping
  category?: string;
  inputs: ToolInputField[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishDate: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface SavedGeneration {
  id: string;
  userId: string;
  toolType: ToolType;
  inputs: Record<string, any>;
  result: string;
  createdAt: string;
}
