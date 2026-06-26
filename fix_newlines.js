import fs from 'fs';

let fileContent = fs.readFileSync('src/data/blog.ts', 'utf8');

let updatedContent = fileContent.replace(/\\n/g, '\n');

fs.writeFileSync('src/data/blog.ts', updatedContent);
console.log('Fixed newlines.');
