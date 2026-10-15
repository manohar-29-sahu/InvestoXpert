import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  agentRules: false,
  // Pin the workspace root: a stray package-lock.json in the home directory otherwise triggers a root warning.
  turbopack: { root: __dirname },
};

export default nextConfig;
