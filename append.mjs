import fs from "fs";
fs.appendFileSync("src/data/blog.ts", "\nexport const BLOG_CATEGORIES = [\"Strategy\", \"Social Media\", \"Community\", \"Productivity\", \"Monetization\"];\n");
console.log("Appended");
