/**
 * Run every check on a built site, the same way GitHub does:
 *
 *   npm run build && npm run check            site check + screenshots
 *   npm run check -- --lighthouse             also Lighthouse scores
 *
 * Starts `next start` on port 3100, runs the checks, then stops it.
 * Exits non-zero if the site check finds a problem.
 */
import { spawn } from "node:child_process";
import { ROOT } from "./rules.mjs";

const PORT = process.env.PORT || "3100";
const BASE = `http://localhost:${PORT}`;
const withLighthouse = process.argv.includes("--lighthouse");

const server = spawn("npx", ["next", "start", "-p", PORT], { cwd: ROOT, stdio: "ignore", detached: true });
const stop = () => {
  try {
    process.kill(-server.pid);
  } catch {}
};
process.on("exit", stop);

for (let i = 0; ; i++) {
  try {
    if ((await fetch(`${BASE}/robots.txt`)).ok) break;
  } catch {}
  if (i > 60) {
    console.error("The site didn't start. Run `npm run build` first.");
    process.exit(1);
  }
  await new Promise((r) => setTimeout(r, 1000));
}

const run = (script) =>
  new Promise((resolve) => {
    const child = spawn("node", [`scripts/guard/${script}`, BASE], { cwd: ROOT, stdio: "inherit" });
    child.on("exit", (code) => resolve(code ?? 1));
  });

const siteCode = await run("site-check.mjs");
await run("screenshots.mjs");
if (withLighthouse) await run("lighthouse.mjs");
stop();
process.exit(siteCode);
