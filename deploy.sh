#!/bin/bash

echo "🚀 CasaVlaška Deployment Script"
echo "==============================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Checking build status...${NC}"

# Run build test
if npm run build; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed. Fix errors before deploying.${NC}"
    exit 1
fi

echo -e "${YELLOW}Checking git status...${NC}"

# Check if there are uncommitted changes
if [[ `git status --porcelain` ]]; then
    echo -e "${YELLOW}⚠️  Uncommitted changes detected. Adding them...${NC}"
    git add .
    read -p "Enter commit message: " commit_msg
    git commit -m "$commit_msg"
fi

echo -e "${YELLOW}Pushing to GitHub...${NC}"

# Attempt to push
if git push origin main; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
    echo -e "${GREEN}Repository: https://github.com/aicoder88/casavlaska${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. Go to https://vercel.com"
    echo "2. Import the GitHub repository"
    echo "3. Deploy with default settings"
    echo ""
    echo -e "${GREEN}🎉 CasaVlaška will be live in ~3 minutes!${NC}"
else
    echo -e "${RED}❌ Push failed. Check authentication.${NC}"
    echo "See GITHUB_PUSH_INSTRUCTIONS.md for help"
    exit 1
fi