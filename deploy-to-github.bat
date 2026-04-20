@echo off
chcp 65001 >nul
echo ==========================================
echo  永兴服装厂网站 - GitHub Pages 部署脚本
echo ==========================================
echo.

REM 检查 Git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未找到 Git，请先安装 Git
    echo 下载地址: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM 设置变量
set REPO_NAME=yongxing-website
set GITHUB_USERNAME=

REM 获取 GitHub 用户名
echo.
echo 请输入你的 GitHub 用户名:
set /p GITHUB_USERNAME=

if "%GITHUB_USERNAME%"=="" (
    echo [错误] GitHub 用户名不能为空
    pause
    exit /b 1
)

echo.
echo [1/5] 初始化 Git 仓库...
cd /d "%~dp0"
git init
git config user.email "deploy@yongxing.com"
git config user.name "Deploy Script"

echo.
echo [2/5] 添加文件到 Git...
git add index.html
git add css/
git add js/
git add images/
git add *.md

echo.
echo [3/5] 提交更改...
git commit -m "Initial commit for GitHub Pages"

echo.
echo [4/5] 添加远程仓库...
git remote remove origin 2>nul
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo [5/5] 推送到 GitHub...
echo 注意: 如果提示输入密码，请输入你的 GitHub Personal Access Token
echo.
git push -u origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [错误] 推送失败，请检查：
    echo 1. 是否已在 GitHub 创建仓库: https://github.com/new
    echo 2. 仓库名称是否为: %REPO_NAME%
    echo 3. GitHub 用户名是否正确: %GITHUB_USERNAME%
    echo.
    echo 如果还没有创建仓库，请先访问 https://github.com/new 创建
    pause
    exit /b 1
)

echo.
echo ==========================================
echo  部署完成！
echo ==========================================
echo.
echo 请按以下步骤启用 GitHub Pages:
echo 1. 访问: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%/settings/pages
   
echo 2. Source 选择 "Deploy from a branch"
echo 3. Branch 选择 "main" 和 "/ (root)"
echo 4. 点击 "Save"
echo.
echo 等待 1-2 分钟后，访问:
echo   https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
echo.
pause
