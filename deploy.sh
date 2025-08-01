#!/bin/bash

# 🚀 Portfolio Deployment Script
# This script will help you deploy your portfolio to GitHub Pages

echo "🚀 Starting Portfolio Deployment..."

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your portfolio should be available at: https://princekumar.github.io/portfolio"
echo "⏰ It may take a few minutes for changes to appear."

# Optional: Open the deployed site
read -p "Would you like to open the deployed site? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    open "https://princekumar.github.io/portfolio"
fi 