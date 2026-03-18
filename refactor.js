const fs = require('fs');
const path = require('path');

const root = __dirname;
const srcDir = path.join(root, 'src');
const importsDir = path.join(srcDir, 'imports');
const componentsDir = path.join(srcDir, 'components');

// ============================================================
// STEP 1: Define exact file → new destination mapping
// Based on real analysis of the project's import graph
// ============================================================
const fileMoves = [
  // Icons (all svg-* files)
  { from: 'svg-0s4k8.tsx',              to: 'icons/svg-0s4k8.tsx' },
  { from: 'svg-y8ymd.tsx',              to: 'icons/svg-y8ymd.tsx' },
  { from: 'svg-itpwb.tsx',              to: 'icons/svg-itpwb.tsx' },
  { from: 'svg-mhjo3.tsx',              to: 'icons/svg-mhjo3.tsx' },
  { from: 'svg-9ibab.tsx',              to: 'icons/svg-9ibab.tsx' },
  { from: 'svg-gvz8m.tsx',              to: 'icons/svg-gvz8m.tsx' },
  { from: 'svg-kgolr.tsx',              to: 'icons/svg-kgolr.tsx' },
  { from: 'svg-wa0xh.tsx',              to: 'icons/svg-wa0xh.tsx' },
  { from: 'svg-81g1e.tsx',              to: 'icons/svg-81g1e.tsx' },
  { from: 'svg-8gk4i.tsx',              to: 'icons/svg-8gk4i.tsx' },
  { from: 'svg-9rp6dcu08w.ts',          to: 'icons/svg-9rp6dcu08w.ts' },
  { from: 'svg-xw860op9ef.ts',          to: 'icons/svg-xw860op9ef.ts' },
  { from: 'svg-6pky3lca5l.ts',          to: 'icons/svg-6pky3lca5l.ts' },
  { from: 'svg-i8wg2sdq33.ts',          to: 'icons/svg-i8wg2sdq33.ts' },
  { from: 'svg-li0wo9x6v9.ts',          to: 'icons/svg-li0wo9x6v9.ts' },
  // Layout
  { from: 'GlobalHeader.tsx',           to: 'layout/GlobalHeader.tsx' },
  { from: 'GlobalFooter.tsx',           to: 'layout/GlobalFooter.tsx' },
  // Sections: Homepage
  { from: 'LosalaTravelWebsite.tsx',    to: 'sections/homepage/LosalaTravelWebsite.tsx' },
  { from: 'HomepageSection1.tsx',       to: 'sections/homepage/HomepageSection1.tsx' },
  { from: 'HomepageSection2.tsx',       to: 'sections/homepage/HomepageSection2.tsx' },
  { from: 'HomepageSection3.tsx',       to: 'sections/homepage/HomepageSection3.tsx' },
  { from: 'homepage/hero.tsx',          to: 'sections/homepage/hero.tsx' },
  { from: 'homepage/offers.tsx',        to: 'sections/homepage/offers.tsx' },
  { from: 'homepage/statistik.tsx',     to: 'sections/homepage/statistik.tsx' },
  { from: 'homepage/paket.tsx',         to: 'sections/homepage/paket.tsx' },
  { from: 'homepage/trans.tsx',         to: 'sections/homepage/trans.tsx' },
  { from: 'homepage/karimun.tsx',       to: 'sections/homepage/karimun.tsx' },
  { from: 'homepage/about.tsx',         to: 'sections/homepage/about.tsx' },
  { from: 'homepage/reviews.tsx',       to: 'sections/homepage/reviews.tsx' },
  // Sections: Transport
  { from: 'Siginjai.tsx',               to: 'sections/transport/Siginjai.tsx' },
  { from: 'Kelimutu.tsx',               to: 'sections/transport/Kelimutu.tsx' },
  { from: 'ExpressBahari.tsx',           to: 'sections/transport/ExpressBahari.tsx' },
  { from: 'Ship.tsx',                   to: 'sections/transport/Ship.tsx' },
  // Sections: Packages
  { from: 'Package.tsx',                to: 'sections/packages/Package.tsx' },
  { from: 'GatheringTrip.tsx',          to: 'sections/packages/GatheringTrip.tsx' },
  { from: 'PrivateTrip.tsx',            to: 'sections/packages/PrivateTrip.tsx' },
  { from: 'GlampingGround.tsx',         to: 'sections/packages/GlampingGround.tsx' },
  { from: 'OffersPage.tsx',             to: 'sections/packages/OffersPage.tsx' },
  { from: 'ContactPage.tsx',            to: 'sections/packages/ContactPage.tsx' },
  { from: 'RareDestination.tsx',        to: 'sections/packages/RareDestination.tsx' },
  { from: '2Hari1MalamGatheringTrip.tsx', to: 'sections/packages/2Hari1MalamGatheringTrip.tsx' },
];

// ============================================================
// STEP 2: Build an import replacement map
// key   = old import string (no extension) that could appear in any file
// value = new @/ alias path (no extension)
// ============================================================
const importMap = {};
for (const move of fileMoves) {
  const fromKey = move.from.replace(/\.(tsx?|ts)$/, '');
  const toVal = move.to.replace(/\.(tsx?|ts)$/, '');
  // Variations of the old path that might appear in other files
  importMap[`@/imports/${fromKey}`] = `@/components/${toVal}`;
}

// Also map internal relative imports that exist WITHIN src/imports files
// After moving, these relative refs will be broken — replace with absolute @/ paths
const internalRelativeMap = {
  // From root-level imports files: ./svg-X -> @/components/icons/svg-X
  './svg-0s4k8':          '@/components/icons/svg-0s4k8',
  './svg-y8ymd':          '@/components/icons/svg-y8ymd',
  './svg-itpwb':          '@/components/icons/svg-itpwb',
  './svg-mhjo3':          '@/components/icons/svg-mhjo3',
  './svg-9rp6dcu08w':     '@/components/icons/svg-9rp6dcu08w',
  './svg-xw860op9ef':     '@/components/icons/svg-xw860op9ef',
  './svg-9ibab':          '@/components/icons/svg-9ibab',
  './svg-gvz8m':          '@/components/icons/svg-gvz8m',
  './svg-kgolr':          '@/components/icons/svg-kgolr',
  './svg-wa0xh':          '@/components/icons/svg-wa0xh',
  './svg-81g1e':          '@/components/icons/svg-81g1e',
  './svg-8gk4i':          '@/components/icons/svg-8gk4i',
  // From homepage/*.tsx files: ../svg-X -> @/components/icons/svg-X
  '../svg-mhjo3':         '@/components/icons/svg-mhjo3',
  '../svg-9rp6dcu08w':    '@/components/icons/svg-9rp6dcu08w',
  // Homepage sub-imports used by LosalaTravelWebsite.tsx etc.
  './homepage/hero':      '@/components/sections/homepage/hero',
  './homepage/offers':    '@/components/sections/homepage/offers',
  './homepage/statistik': '@/components/sections/homepage/statistik',
  './homepage/paket':     '@/components/sections/homepage/paket',
  './homepage/trans':     '@/components/sections/homepage/trans',
  './homepage/karimun':   '@/components/sections/homepage/karimun',
  './homepage/about':     '@/components/sections/homepage/about',
  './homepage/reviews':   '@/components/sections/homepage/reviews',
};

// Also handle relative imports from app pages like ../../../imports/svg-0s4k8
const relativeFromAppMap = {
  '../../../imports/svg-0s4k8':  '@/components/icons/svg-0s4k8',
  '../../imports/svg-0s4k8':     '@/components/icons/svg-0s4k8',
  '../imports/svg-0s4k8':        '@/components/icons/svg-0s4k8',
  '../../imports/svg-mhjo3':     '@/components/icons/svg-mhjo3',
  '../imports/GlobalHeader':     '@/components/layout/GlobalHeader',
  '../imports/GlobalFooter':     '@/components/layout/GlobalFooter',
};

const fullReplacementMap = { ...importMap, ...internalRelativeMap, ...relativeFromAppMap };

// ============================================================
// STEP 3: Actually move files
// ============================================================
// Create all target directories first
const dirsNeeded = new Set();
for (const move of fileMoves) {
  dirsNeeded.add(path.join(componentsDir, path.dirname(move.to)));
}
for (const dir of dirsNeeded) {
  fs.mkdirSync(dir, { recursive: true });
}

for (const move of fileMoves) {
  const src = path.join(importsDir, move.from.replace(/\//g, path.sep));
  const dst = path.join(componentsDir, move.to.replace(/\//g, path.sep));
  if (fs.existsSync(src)) {
    fs.renameSync(src, dst);
    console.log(`MOVED: imports/${move.from} → components/${move.to}`);
  } else {
    console.warn(`SKIP (not found): imports/${move.from}`);
  }
}

// ============================================================
// STEP 4: Update all import strings across entire src/
// Only replace within "from '...'" or "from '...' statements
// ============================================================
function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace using exact string matching inside from '...' statements
  content = content.replace(/from\s+(['"])(.*?)\1/g, (match, quote, importPath) => {
    if (fullReplacementMap[importPath] !== undefined) {
      changed = true;
      return `from ${quote}${fullReplacementMap[importPath]}${quote}`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`UPDATED imports in: ${filePath.replace(root + path.sep, '')}`);
  }
}

function walkAndUpdate(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walkAndUpdate(full);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      updateFile(full);
    }
  }
}

walkAndUpdate(srcDir);

console.log('\n✅ Refactoring complete!');
