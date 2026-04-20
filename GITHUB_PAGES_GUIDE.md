# GitHub Pages 部署指南

## 步骤 1：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 填写信息：
   - Repository name: `yongxing-website`
   - Description: 永兴服装厂官网
   - 选择 Public（公开）
   - 勾选 "Add a README file"
3. 点击 "Create repository"

## 步骤 2：上传网站文件

在仓库页面点击 "Add file" → "Upload files"，上传以下文件：
- index.html
- css/style.css
- js/i18n.js
- js/main.js
- images/ 目录下的所有图片

或者使用 Git 命令行：

```bash
# 进入网站目录
cd C:\Users\linlimin\.qclaw\workspace\yongxing-website

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/yongxing-website.git

# 推送
git push -u origin main
```

## 步骤 3：启用 GitHub Pages

1. 在仓库页面点击 "Settings"
2. 左侧菜单点击 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main" 和 "/ (root)"
5. 点击 "Save"

## 步骤 4：访问网站

等待 1-2 分钟后，访问：
```
https://YOUR_USERNAME.github.io/yongxing-website/
```

## 自定义域名（可选）

1. 在仓库根目录创建文件 `CNAME`
2. 文件内容填写你的域名，如：`www.yongxing.com`
3. 提交并推送
4. 在你的 DNS 服务商处添加 CNAME 记录：
   - 主机记录：www
   - 记录类型：CNAME
   - 记录值：YOUR_USERNAME.github.io

## 自动部署脚本

我已经创建了 `deploy-to-github.bat` 脚本，运行它可以自动完成部署。
