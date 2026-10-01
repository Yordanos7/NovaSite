import fs from 'fs';

const components = ["accordion", "alert", "alert-dialog", "aspect-ratio", "avatar", "badge", "breadcrumb", "calendar", "carousel", "chart", "collapsible", "command", "context-menu", "dialog", "drawer", "form", "hover-card", "input-otp", "menubar", "navigation-menu", "pagination", "popover", "progress", "radio-group", "resizable", "scroll-area", "select", "separator", "sheet", "slider", "switch", "table", "tabs", "toast", "toggle", "toggle-group"];

let deps = new Set();
let existingFiles = new Set();
try {
  existingFiles = new Set(fs.readdirSync('src/components').map(f => f.replace('.tsx', '')));
} catch (e) {}

async function run() {
  for (const c of components) {
    if (existingFiles.has(c)) {
      console.log(`Skipping ${c} (already exists)`);
      continue;
    }
    try {
      console.log(`Fetching ${c}...`);
      const res = await fetch(`https://ui.shadcn.com/r/styles/default/${c}.json`);
      if (!res.ok) throw new Error("Status " + res.status);
      const json = await res.json();
      
      let content = json.files[0].content;
      content = content.replace(/@\/lib\/utils/g, "@block_p/ui/lib/utils");
      content = content.replace(/@\/components\/ui/g, "@block_p/ui/components");
      content = content.replace(/@\/registry\/[^\/]+\/ui/g, "@block_p/ui/components");
      content = content.replace(/@\/components\/hooks/g, "@block_p/ui/hooks");
      
      fs.writeFileSync(`src/components/${c}.tsx`, content);
      
      if (json.dependencies) json.dependencies.forEach(d => deps.add(d));
    } catch (e) {
      console.log(`Failed to fetch ${c}: ${e.message}`);
    }
  }

  const depArray = Array.from(deps);
  if (depArray.length > 0) {
    console.log("\nDependencies to install: " + depArray.join(' '));
  }
}
run();
