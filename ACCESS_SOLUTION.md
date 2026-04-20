# 网站访问问题说明

## 问题原因
腾讯云 COS 的静态网站托管功能有一个特性：默认会在响应头中添加 `Content-Disposition: attachment`，这会导致浏览器将页面作为文件下载而不是直接显示。

## 解决方案

### 方案 1：直接访问 COS 域名（推荐临时方案）
使用以下地址访问网站：
```
http://yongxing-website-1409600130.cos.ap-guangzhou.myqcloud.com/index.html
```

### 方案 2：配置 CDN（推荐正式方案）
1. 登录腾讯云控制台 https://console.cloud.tencent.com/cdn
2. 点击「域名管理」→「添加域名」
3. 配置：
   - 域名类型：静态加速
   - 加速域名：你的自定义域名（如 www.yongxing.com）
   - 源站类型：COS
   - 选择存储桶：yongxing-website-1409600130
4. 在「缓存配置」中设置：
   - 缓存过期时间：1小时
   - 忽略查询字符串：是
5. 在「HTTPS 配置」中申请免费证书
6. 在 DNS 服务商处添加 CNAME 记录指向 CDN 域名

### 方案 3：使用其他静态托管服务
如果腾讯云 COS 静态网站托管不方便，可以考虑：
- **GitHub Pages**：免费，适合静态网站
- **Vercel**：免费，支持自动部署
- **Netlify**：免费，支持表单功能

### 方案 4：腾讯云云开发（TCB）
使用腾讯云云开发的静态网站托管功能，不会有 Content-Disposition 问题。

## 当前可用地址

直接访问（可正常显示）：
```
http://yongxing-website-1409600130.cos.ap-guangzhou.myqcloud.com/index.html
```

静态网站地址（会下载）：
```
http://yongxing-website-1409600130.cos-website.ap-guangzhou.myqcloud.com/
```

## 建议

对于企业官网，推荐使用 **方案 2（CDN + 自定义域名）**：
1. 可以绑定自己的域名（如 www.yongxing.com）
2. 支持 HTTPS
3. 全球加速
4. 不会有下载问题
5. 费用很低（约 10-50 元/月，取决于流量）
