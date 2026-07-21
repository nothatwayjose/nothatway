import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// Enables Cloudflare bindings when using `next dev` locally.
initOpenNextCloudflareForDev();
