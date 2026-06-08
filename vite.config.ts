import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solidStart(),
    tailwindcss(),
    nitro({
      prerender: {
        crawlLinks: true,
        failOnError: true,
      },
      compatibilityDate: "2024-09-19",
      preset: "cloudflare_module",
      cloudflare: {
        deployConfig: true,
        nodeCompat: true,
        wrangler: {

        }
      }
    })
  ]
});
