# GitHub 部署认证说明

## 当前状态
Git 仓库已准备好推送，但需要 GitHub 认证。

## 认证方式

由于 GitHub 已停止支持密码登录，需要使用 **Personal Access Token**。

### 创建 Personal Access Token

1. 登录 GitHub: https://github.com
2. 点击右上角头像 → Settings
3. 左侧菜单最下方 → Developer settings
4. Personal access tokens → Tokens (classic)
5. 点击 "Generate new token (classic)"
6. 填写信息：
   - Note: `yongxing-website-deploy`
   - Expiration: 选择过期时间（建议 30 天或更短）
   - 勾选权限：`repo`（完整仓库访问权限）
7. 点击 "Generate token"
8. **立即复制生成的 token**（只显示一次！）

### 完成推送

在命令行提示输入密码时，粘贴刚才复制的 token 而不是密码。

---

## 或者，手动完成推送

如果命令行认证不方便，可以手动完成：

### 方法 1：使用 GitHub Desktop
1. 下载安装 GitHub Desktop: https://desktop.github.com
2. 登录你的 GitHub 账号
3. 添加本地仓库（选择 yongxing-website 文件夹）
4. 点击 "Publish repository"

### 方法 2：直接在 GitHub 上传文件
1. 访问 https://github.com/new 创建仓库
2. 仓库名：`yongxing-website`
3. 选择 Public
4. 创建后点击 "Add file" → "Upload files"
5. 上传所有网站文件

---

## 推送完成后

1. 访问 https://github.com/18186023-cyber/yongxing-website/settings/pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main" 和 "/ (root)"
4. 点击 "Save"
5. 等待 1-2 分钟后访问：https://18186023-cyber.github.io/yongxing-website/
