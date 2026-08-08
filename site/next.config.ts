import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // De map hierboven bevat andere projecten, dus wijs Turbopack expliciet
  // naar deze site als projectwortel.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
