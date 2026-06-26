import fs from "fs";
const lines = fs.readFileSync("src/data/blog.ts", "utf-8").split("\n");
fs.writeFileSync("src/data/blog.ts", lines.slice(0, 131).join("\n"));
console.log("Truncated!");
