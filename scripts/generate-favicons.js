const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Highly detailed, ultra-sharp SVG icon matching Property Files Network logo
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0b1736"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4"/>
      <stop offset="60%" stop-color="#d97706" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="30%" stop-color="#fef08a"/>
      <stop offset="65%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.7"/>
      <stop offset="50%" stop-color="#fef08a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.5"/>
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background Base with Rounded Squircle -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect width="496" height="496" x="8" y="8" rx="104" fill="none" stroke="url(#goldBorder)" stroke-width="5"/>
  
  <!-- Subtle Horizon Sunset Radial Glow -->
  <circle cx="256" cy="220" r="190" fill="url(#sunGlow)"/>

  <!-- Golden Roof & Chimney Architecture -->
  <g filter="url(#goldGlow)">
    <!-- Chimney on left slope -->
    <path d="M 186 172 L 186 128 L 212 128 L 212 190 Z" fill="url(#goldGrad)"/>
    <rect x="182" y="124" width="34" height="8" rx="2" fill="#fef08a"/>

    <!-- Gabled Roof Outer Frame -->
    <path d="M 256 100 L 420 226 C 404 228 380 222 364 212 L 256 132 L 148 212 C 132 222 108 228 92 226 Z" fill="url(#goldGrad)"/>
    
    <!-- 4-Pane Square Window -->
    <rect x="232" y="156" width="20" height="20" rx="3" fill="#09132b" stroke="url(#goldGrad)" stroke-width="3"/>
    <rect x="260" y="156" width="20" height="20" rx="3" fill="#09132b" stroke="url(#goldGrad)" stroke-width="3"/>
    <rect x="232" y="184" width="20" height="20" rx="3" fill="#09132b" stroke="url(#goldGrad)" stroke-width="3"/>
    <rect x="260" y="184" width="20" height="20" rx="3" fill="#09132b" stroke="url(#goldGrad)" stroke-width="3"/>

    <!-- Sweeping Lower Arch Baseline -->
    <path d="M 72 250 Q 256 210 440 250 Q 256 228 72 250 Z" fill="url(#goldGrad)"/>
  </g>

  <!-- PFN Letters Luxury Monogram -->
  <g text-anchor="middle" filter="url(#goldGlow)">
    <text x="256" y="365" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="102" font-weight="900" letter-spacing="12" fill="url(#goldGrad)">PFN</text>
  </g>

  <!-- Elegant Subtitle Divider -->
  <g text-anchor="middle">
    <!-- Left Accent Line -->
    <line x1="80" y1="416" x2="160" y2="416" stroke="url(#goldGrad)" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Center Luxury Tagline -->
    <text x="256" y="422" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" letter-spacing="7" fill="#f8fafc">NETWORK</text>
    
    <!-- Right Accent Line -->
    <line x1="352" y1="416" x2="432" y2="416" stroke="url(#goldGrad)" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`;

// Helper function to build a multi-resolution ICO file from PNG buffers
function buildIco(images) {
  // Header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(images.length, 4); // Number of images

  let offset = 6 + (16 * images.length);
  const entries = [];
  const dataBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color count
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset of image data
    entries.push(entry);
    dataBuffers.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...dataBuffers]);
}

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');

  // 1. Write SVG to src/app/icon.svg (Next.js automatically uses this)
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent, 'utf-8');
  console.log('✓ Written src/app/icon.svg');

  // 2. Write SVG to public/favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');
  console.log('✓ Written public/favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // 3. Generate PNGs
  const p16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const p32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const p48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const p180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const p192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  const p512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), p16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), p32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), p180);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), p192);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), p512);
  console.log('✓ Written PNG icons (16, 32, 180, 192, 512)');

  // 4. Also write apple-icon.png to src/app for Next.js App Router
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), p180);
  console.log('✓ Written src/app/apple-icon.png');

  // 5. Build multi-resolution favicon.ico containing 16x16, 32x32, 48x48
  const icoBuffer = buildIco([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 },
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Written public/favicon.ico and src/app/favicon.ico');

  console.log('All favicon assets generated successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
