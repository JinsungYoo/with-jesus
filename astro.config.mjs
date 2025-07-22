// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless"; // ✅ 서버리스 모드

export default defineConfig({
  site: "https://seorosaranghara.com", // 실제 배포 도메인 입력
  integrations: [mdx(), sitemap()],
  adapter: vercel(), // ✅ Vercel 용 어댑터로 변경
});
