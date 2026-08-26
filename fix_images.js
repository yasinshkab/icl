const fs = require('fs');
const path = require('path');
function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

const files = walkSync('c:/Users/HP/Pictures/icl_website/src').filter(f => f.endsWith('.tsx'));
let count = 0;
for (const file of files) {
  let original = fs.readFileSync(file, 'utf8');
  let content = original;
  
  // Replace JSX props: src="/images/..."
  content = content.replace(/src="(\/images\/[^"]+)"/g, 'src={\${process.env.NEXT_PUBLIC_BASE_PATH || ""}\}');
  
  // Replace object properties or variables: "/images/..."
  content = content.replace(/(?<!src=\{?)"(\/images\/[^"]+)"/g, '\${process.env.NEXT_PUBLIC_BASE_PATH || ""}\');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
    count++;
  }
}
console.log('Total files updated: ' + count);