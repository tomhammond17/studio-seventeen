import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const outDir = path.join(root, "public", "brand");

const variants = {
  dark: {
    bg: "#0D0D0D",
    surface: "#151413",
    line: "rgba(255,255,255,0.12)",
    text: "#F5F1EB",
    muted: "#9E948A",
    accent: "#E85D26",
  },
  light: {
    bg: "#F5F1EB",
    surface: "#EEE8E1",
    line: "rgba(13,13,13,0.12)",
    text: "#0D0D0D",
    muted: "#5E554D",
    accent: "#E85D26",
  },
};

function svgFrame(width, height, background, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${background.bg}"/>
  ${body}
</svg>
`;
}

function optionALockup(theme) {
  return svgFrame(
    1600,
    540,
    theme,
    `
  <line x1="110" y1="132" x2="1490" y2="132" stroke="${theme.line}" stroke-width="2"/>
  <line x1="110" y1="408" x2="1490" y2="408" stroke="${theme.line}" stroke-width="2"/>
  <text x="110" y="112" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="32" letter-spacing="10">STUDIO</text>
  <text x="110" y="298" fill="${theme.text}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="168" font-weight="700" letter-spacing="-6">SEVENTEEN</text>
  <text x="1204" y="298" fill="${theme.accent}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="168" font-weight="700" letter-spacing="-6">17</text>
  <text x="110" y="372" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="34" letter-spacing="5">INDUSTRIAL SOFTWARE</text>
  <circle cx="1450" cy="94" r="12" fill="${theme.accent}"/>
`,
  );
}

function optionAIcon(theme) {
  return svgFrame(
    512,
    512,
    theme,
    `
  <rect x="72" y="72" width="368" height="368" rx="56" fill="${theme.surface}" stroke="${theme.line}" stroke-width="3"/>
  <line x1="128" y1="176" x2="384" y2="176" stroke="${theme.line}" stroke-width="2"/>
  <line x1="128" y1="336" x2="384" y2="336" stroke="${theme.line}" stroke-width="2"/>
  <text x="128" y="162" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="24" letter-spacing="6">STUDIO</text>
  <text x="128" y="282" fill="${theme.text}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="104" font-weight="700" letter-spacing="-4">S</text>
  <text x="214" y="282" fill="${theme.accent}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="104" font-weight="700" letter-spacing="-4">17</text>
  <text x="128" y="370" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="22" letter-spacing="4">TOOLS</text>
`,
  );
}

function optionBLockup(theme) {
  return svgFrame(
    1600,
    540,
    theme,
    `
  <circle cx="266" cy="270" r="154" fill="${theme.surface}" stroke="${theme.line}" stroke-width="3"/>
  <line x1="196" y1="172" x2="266" y2="366" stroke="${theme.text}" stroke-width="24" stroke-linecap="round"/>
  <line x1="336" y1="172" x2="266" y2="366" stroke="${theme.accent}" stroke-width="24" stroke-linecap="round"/>
  <line x1="360" y1="172" x2="360" y2="366" stroke="${theme.text}" stroke-width="16" stroke-linecap="round"/>
  <line x1="402" y1="172" x2="402" y2="366" stroke="${theme.text}" stroke-width="16" stroke-linecap="round"/>
  <text x="520" y="212" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="28" letter-spacing="9">MARK SYSTEM</text>
  <text x="520" y="302" fill="${theme.text}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="126" font-weight="700" letter-spacing="-4">Studio Seventeen</text>
  <text x="520" y="366" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="34" letter-spacing="4">XVII DERIVED  •  INDUSTRIAL SOFTWARE</text>
  <line x1="520" y1="392" x2="1466" y2="392" stroke="${theme.line}" stroke-width="2"/>
`,
  );
}

function optionBIcon(theme) {
  return svgFrame(
    512,
    512,
    theme,
    `
  <circle cx="256" cy="256" r="184" fill="${theme.surface}" stroke="${theme.line}" stroke-width="3"/>
  <line x1="174" y1="136" x2="256" y2="366" stroke="${theme.text}" stroke-width="28" stroke-linecap="round"/>
  <line x1="338" y1="136" x2="256" y2="366" stroke="${theme.accent}" stroke-width="28" stroke-linecap="round"/>
  <line x1="354" y1="136" x2="354" y2="366" stroke="${theme.text}" stroke-width="18" stroke-linecap="round"/>
  <line x1="402" y1="136" x2="402" y2="366" stroke="${theme.text}" stroke-width="18" stroke-linecap="round"/>
  <text x="118" y="416" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="24" letter-spacing="7">XVII</text>
`,
  );
}

function optionCLockup(theme) {
  return svgFrame(
    1600,
    540,
    theme,
    `
  <rect x="110" y="108" width="1380" height="324" rx="24" fill="${theme.surface}" stroke="${theme.line}" stroke-width="2"/>
  <line x1="160" y1="190" x2="1440" y2="190" stroke="${theme.line}" stroke-width="2"/>
  <line x1="160" y1="352" x2="1440" y2="352" stroke="${theme.line}" stroke-width="2"/>
  <text x="160" y="172" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="30" letter-spacing="12">STUDIO</text>
  <text x="160" y="302" fill="${theme.text}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="142" font-weight="600" letter-spacing="8">SEVENTEEN</text>
  <text x="160" y="394" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="28" letter-spacing="6">EST. 2025  •  PRECISE SOFTWARE FOR INDUSTRIAL TEAMS</text>
  <rect x="1290" y="136" width="128" height="128" rx="64" fill="${theme.bg}" stroke="${theme.line}" stroke-width="2"/>
  <text x="1320" y="215" fill="${theme.accent}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="52" font-weight="700" letter-spacing="2">17</text>
`,
  );
}

function optionCIcon(theme) {
  return svgFrame(
    512,
    512,
    theme,
    `
  <rect x="78" y="78" width="356" height="356" rx="40" fill="${theme.surface}" stroke="${theme.line}" stroke-width="3"/>
  <line x1="128" y1="162" x2="384" y2="162" stroke="${theme.line}" stroke-width="2"/>
  <line x1="128" y1="350" x2="384" y2="350" stroke="${theme.line}" stroke-width="2"/>
  <text x="128" y="148" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="24" letter-spacing="8">STUDIO</text>
  <text x="128" y="286" fill="${theme.text}" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="92" font-weight="600" letter-spacing="6">S17</text>
  <text x="128" y="386" fill="${theme.muted}" font-family="'Inter', sans-serif" font-size="22" letter-spacing="5">EDITORIAL</text>
`,
  );
}

const specs = [
  ["option-a-lockup", optionALockup],
  ["option-a-icon", optionAIcon],
  ["option-b-lockup", optionBLockup],
  ["option-b-icon", optionBIcon],
  ["option-c-lockup", optionCLockup],
  ["option-c-icon", optionCIcon],
];

fs.mkdirSync(outDir, { recursive: true });

for (const [themeName, theme] of Object.entries(variants)) {
  for (const [name, renderer] of specs) {
    const svgPath = path.join(outDir, `${name}-${themeName}.svg`);
    const pngPath = path.join(outDir, `${name}-${themeName}.png`);
    fs.writeFileSync(svgPath, renderer(theme), "utf8");
    spawnSync("sips", ["-s", "format", "png", svgPath, "--out", pngPath], {
      stdio: "inherit",
    });
  }
}

const manifest = {
  generatedAt: new Date().toISOString(),
  files: specs.flatMap(([name]) =>
    Object.keys(variants).flatMap((theme) => [
      `${name}-${theme}.svg`,
      `${name}-${theme}.png`,
    ]),
  ),
};

fs.writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8",
);
