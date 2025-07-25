/** @type {import('next').NextConfig} */

const repo = 'portfolio'; 

const nextConfig = {

  output: 'export',

  basePath: `/${repo}`,

  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
