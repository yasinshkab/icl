// Node script to download image assets listed in scaffold-tmp/old-site/urls.json
// Usage: node scripts/download-assets.js

import fs from "fs";
import path from "path";

const outDir = path.resolve("public/old-assets");
const urlsPath = path.resolve("scaffold-tmp/old-site/urls.json");

async function main() {
  if (!fs.existsSync(urlsPath)) {
    console.error("urls.json not found. Run script from project root.");
    process.exit(1);
  }

  const urls = JSON.parse(fs.readFileSync(urlsPath, "utf8"));
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`Failed: ${url} -> ${res.status}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const filename = path.basename(new URL(url).pathname);
      const target = path.join(outDir, filename);
      fs.writeFileSync(target, buf);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.warn(`Error downloading ${url}: ${e}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
