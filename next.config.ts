/** @type {import('next').NextConfig} */

// Check if the current environment is for GitHub Pages deployment.
// The 'GITHUB_ACTIONS' environment variable is automatically set to 'true' in GitHub Actions.
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const repo = 'portfolio'; // Replace with your repository name

const nextConfig = {
  // Use the static export feature ONLY when deploying to GitHub Pages.
  output: isGithubActions ? 'export' : undefined,

  // Set the basePath and assetPrefix ONLY for the GitHub Pages deployment.
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  
  images: {
    // Image optimization is not available for static exports.
    unoptimized: true,
  },
};

module.exports = nextConfig;
