#!/bin/bash
set -e

echo "🧹 Cleaning up WSL system safely..."

# 1. Clean apt caches
echo "→ Cleaning APT cache..."
sudo apt-get clean
sudo apt-get autoclean

# 2. Remove unused dependencies
echo "→ Removing orphaned packages..."
sudo apt-get autoremove -y

# 3. Clean log files
echo "→ Truncating log files..."
sudo find /var/log -type f -exec truncate -s 0 {} \;

# 4. Clean temporary files
echo "→ Removing temporary files..."
sudo rm -rf /tmp/* /var/tmp/*

# 5. Check for old Docker images (optional, only if Docker is used inside WSL)
if command -v docker &> /dev/null; then
    echo "→ Cleaning up Docker..."
    docker system prune -af --volumes
fi

# 6. Optionally compact the WSL disk
echo "→ You can shrink the WSL VHDX from PowerShell with:"
echo "    wsl --shutdown"
echo "    Optimize-VHD -Path C:\\Users\\<YourUser>\\AppData\\Local\\Packages\\<Distro>\\LocalState\\ext4.vhdx -Mode Full"

echo "✅ Cleanup complete!"

