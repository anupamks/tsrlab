#!/bin/bash

# Deployment script for TSR Lab Next.js application
# Server IP: 210.89.34.145

echo "Starting deployment process..."

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Upload the following files/folders to your server at 210.89.34.145:"
    echo "   - .next/ (build output)"
    echo "   - public/ (static files)"
    echo "   - package.json"
    echo "   - next.config.js"
    echo "   - node_modules/ (or run 'npm install --production' on server)"
    echo ""
    echo "2. On your server, run:"
    echo "   npm install --production"
    echo "   npm start"
    echo ""
    echo "3. Or use PM2 for process management:"
    echo "   npm install -g pm2"
    echo "   pm2 start ecosystem.config.js"
    echo "   pm2 save"
    echo "   pm2 startup"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi

