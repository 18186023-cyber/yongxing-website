# 腾讯云 COS 静态网站部署脚本
# 使用前需要先配置腾讯云密钥: tccli configure

# 配置变量
$BUCKET_NAME = "yongxing-website-$((Get-Date).ToString('yyyyMMdd'))"
$REGION = "ap-guangzhou"  # 广州区域，可根据需要修改
$WEBSITE_DIR = "."

Write-Host "=== 腾讯云 COS 静态网站部署脚本 ===" -ForegroundColor Green
Write-Host ""

# 检查 tccli 是否安装
if (-not (Get-Command tccli -ErrorAction SilentlyContinue)) {
    Write-Host "错误: 未找到 tccli 命令，请先安装腾讯云 CLI" -ForegroundColor Red
    Write-Host "安装命令: pip install tccli" -ForegroundColor Yellow
    exit 1
}

# 检查是否已配置密钥
try {
    $config = tccli configure get 2>&1
    if ($config -match "未配置") {
        Write-Host "请先配置腾讯云密钥:" -ForegroundColor Yellow
        Write-Host "tccli configure" -ForegroundColor Cyan
        Write-Host "需要输入: SecretId, SecretKey, region (如 ap-guangzhou), output (json)" -ForegroundColor Gray
        exit 1
    }
} catch {
    Write-Host "请先配置腾讯云密钥:" -ForegroundColor Yellow
    Write-Host "tccli configure" -ForegroundColor Cyan
    exit 1
}

Write-Host "步骤 1: 创建存储桶 $BUCKET_NAME" -ForegroundColor Green
# 创建存储桶
tccli cos CreateBucket --Bucket $BUCKET_NAME --Region $REGION --ACL public-read

Write-Host ""
Write-Host "步骤 2: 开启静态网站托管" -ForegroundColor Green
# 配置静态网站托管
$websiteConfig = @{
    IndexDocument = @{Suffix = "index.html"}
    ErrorDocument = @{Key = "index.html"}
} | ConvertTo-Json -Depth 3

$websiteConfig | Out-File -FilePath "$env:TEMP\website_config.json" -Encoding UTF8
tccli cos PutBucketWebsite --Bucket $BUCKET_NAME --Region $REGION --WebsiteConfiguration "file://$env:TEMP\website_config.json"

Write-Host ""
Write-Host "步骤 3: 上传网站文件" -ForegroundColor Green
# 上传所有文件
$files = Get-ChildItem -Path $WEBSITE_DIR -Recurse -File | Where-Object { 
    $_.Extension -notin @('.ps1', '.md', '.json') -and 
    $_.Name -notin @('.gitignore', 'deploy.ps1')
}

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring((Resolve-Path $WEBSITE_DIR).Path.Length + 1).Replace("\", "/")
    $contentType = switch ($file.Extension) {
        ".html" { "text/html" }
        ".css" { "text/css" }
        ".js" { "application/javascript" }
        ".jpg" { "image/jpeg" }
        ".jpeg" { "image/jpeg" }
        ".png" { "image/png" }
        ".svg" { "image/svg+xml" }
        ".ico" { "image/x-icon" }
        ".woff" { "font/woff" }
        ".woff2" { "font/woff2" }
        ".ttf" { "font/ttf" }
        default { "application/octet-stream" }
    }
    
    Write-Host "上传: $relativePath" -ForegroundColor Gray
    tccli cos Upload --Bucket $BUCKET_NAME --Region $REGION --Key $relativePath --Body $file.FullName --ContentType $contentType
}

Write-Host ""
Write-Host "步骤 4: 配置存储桶为公共读" -ForegroundColor Green
tccli cos PutBucketAcl --Bucket $BUCKET_NAME --Region $REGION --ACL public-read

Write-Host ""
Write-Host "=== 部署完成! ===" -ForegroundColor Green
Write-Host "网站访问地址:" -ForegroundColor Cyan
Write-Host "http://$BUCKET_NAME.cos-website-$REGION.myqcloud.com" -ForegroundColor Yellow
Write-Host ""
Write-Host "注意: 如果需要自定义域名，请在腾讯云控制台配置" -ForegroundColor Gray

# 清理临时文件
Remove-Item "$env:TEMP\website_config.json" -ErrorAction SilentlyContinue
