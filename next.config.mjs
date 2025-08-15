/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  basePath: isProd ? "/nextjs-app" : "",
  assetPrefix: isProd ? "/nextjs-app/" : "",
};
