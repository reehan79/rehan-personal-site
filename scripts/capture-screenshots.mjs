#!/usr/bin/env node
/**
 * One-off script to capture screenshots for UI audit.
 * Run with: node scripts/capture-screenshots.mjs
 * Requires: npm run dev running (default http://localhost:3000).
 * If port 3000 is occupied: BASE_URL=http://localhost:3001 node scripts/capture-screenshots.mjs
 */

import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "docs", "ui-review");
const BASE = process.env.BASE_URL || "http://localhost:3000";

const captures = [
  {
    name: "home-desktop-full",
    url: "/",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "home-desktop-above-fold",
    url: "/",
    viewport: { width: 1920, height: 1080 },
    fullPage: false,
  },
  {
    name: "home-laptop",
    url: "/",
    viewport: { width: 1024, height: 768 },
    fullPage: true,
  },
  {
    name: "home-mobile",
    url: "/",
    viewport: { width: 375, height: 667 },
    fullPage: true,
  },
  {
    name: "project-icube-q",
    url: "/projects/icube-q",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "simulator",
    url: "/simulator",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "downloads",
    url: "/downloads",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "interactive-landing",
    url: "/interactive",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "interactive-ngn-ntn",
    url: "/interactive/ngn-ntn",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "interactive-policy-sim",
    url: "/interactive/policy-sim",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "interactive-parwaz-orbit",
    url: "/interactive/parwaz-orbit",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
  {
    name: "interactive-parwaz-mvp",
    url: "/interactive/parwaz-mvp",
    viewport: { width: 1920, height: 1080 },
    fullPage: true,
  },
];

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext();

for (const cap of captures) {
  const page = await context.newPage();
  await page.setViewportSize(cap.viewport);
  await page.goto(BASE + cap.url, { waitUntil: "networkidle" });
  const path = join(OUT_DIR, `${cap.name}.png`);
  await page.screenshot({ path, fullPage: cap.fullPage });
  console.log(`Saved: ${path}`);
  await page.close();
}

await context.close();
await browser.close();
console.log("Done.");
