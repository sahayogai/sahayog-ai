/**
 * Pre-render script for SEO — generates static HTML for each route at build time.
 * Run with: npm run prerender
 *
 * Flow:
 *   1. Build the client bundle  → dist/
 *   2. Build the SSR bundle     → dist-ssr/
 *   3. Render each route using react-dom/server renderToString
 *   4. Inject rendered HTML into the dist/index.html template
 *   5. Clean up dist-ssr/
 */

import { build } from "vite"
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import react from "@vitejs/plugin-react"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "..")

// Add each page route here as the site grows
const routes = ["/"]

async function prerender() {
  console.log("\n🔨  Building client bundle…")
  await build({
    root,
    plugins: [react()],
    logLevel: "warn",
    build: { outDir: "dist" },
  })

  console.log("🔨  Building SSR bundle…")
  await build({
    root,
    plugins: [react()],
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.jsx",
      outDir: "dist-ssr",
      rollupOptions: {
        input: resolve(root, "src/entry-server.jsx"),
        external: [],
      },
      // Silence CSS extraction warnings in SSR mode
      cssCodeSplit: false,
    },
  })

  const template = readFileSync(resolve(root, "dist/index.html"), "utf-8")

  // Dynamically import the SSR bundle (CJS output from Vite SSR build)
  const entryPath = resolve(root, "dist-ssr/entry-server.js")
  const { render } = await import(entryPath)

  for (const route of routes) {
    console.log(`⚡  Pre-rendering ${route}…`)

    const { html: appHtml } = render(route)

    // Inject the rendered app HTML
    const html = template.replace("<!--ssr-outlet-->", appHtml)

    const outPath =
      route === "/"
        ? resolve(root, "dist/index.html")
        : resolve(root, `dist${route}/index.html`)

    const dir = dirname(outPath)
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

    writeFileSync(outPath, html)
    console.log(`   ✅  Written → ${outPath.replace(root, ".")}`)
  }

  // Clean up server bundle — not needed after pre-render
  rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true })

  console.log("\n🚀  Pre-rendering complete — dist/ is ready to deploy!\n")
}

prerender().catch((err) => {
  console.error("\n❌  Pre-rendering failed:\n", err)
  process.exit(1)
})
