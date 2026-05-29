import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 向け静的エクスポート
  output: "export",
  // next/image を静的エクスポートで使うために必要
  images: {
    unoptimized: true,
  },
  // トレイリングスラッシュを統一（Cloudflare Pages 推奨）
  trailingSlash: true,
};

export default nextConfig;
