#!/bin/bash
# AxionAx SDK TypeScript - macOS Installation Script

set -e

echo "================================================"
echo "AxionAx SDK TypeScript - macOS Installer"
echo "================================================"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Installing Node.js...${NC}"
    brew install node
else
    echo -e "${GREEN}Node.js already installed: $(node --version)${NC}"
fi

# Install dependencies
echo -e "\n${YELLOW}Installing dependencies...${NC}"
npm install

echo -e "\n${GREEN}Installation complete!${NC}"
echo -e "Run: npm run build"
