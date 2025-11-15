# AxionAx SDK TypeScript - Windows Installation Script

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "AxionAx SDK TypeScript - Windows Installer" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

# Install Node.js if not present
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "`nInstalling Node.js..." -ForegroundColor Yellow
    choco install nodejs-lts -y
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
} else {
    Write-Host "Node.js already installed: $(node --version)" -ForegroundColor Green
}

# Install dependencies
Write-Host "`nInstalling dependencies..." -ForegroundColor Yellow
npm install

Write-Host "`nInstallation complete!" -ForegroundColor Green
Write-Host "Run: npm run build"
