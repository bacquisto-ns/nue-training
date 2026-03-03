# Combine copilot-training files into a single embeddable HTML
# with navy blue / lime green color theme

$utf8 = New-Object System.Text.UTF8Encoding($false)
$html = [System.IO.File]::ReadAllText((Resolve-Path "copilot-training/index.html").Path, $utf8)
$css = [System.IO.File]::ReadAllText((Resolve-Path "copilot-training/styles.css").Path, $utf8)
$contentJs = [System.IO.File]::ReadAllText((Resolve-Path "copilot-training/content.js").Path, $utf8)
$appJs = [System.IO.File]::ReadAllText((Resolve-Path "copilot-training/app.js").Path, $utf8)

# --- Color replacements: purple/blue -> navy/lime ---
# Primary accent purple -> lime green
$css = $css -replace '#8b5cf6', '#84cc16'
$css = $css -replace 'rgba\(139, 92, 246', 'rgba(132, 204, 22'

# Accent blue -> brighter lime
$css = $css -replace '#3b82f6', '#a3e635'
$css = $css -replace 'rgba\(59, 130, 246', 'rgba(163, 230, 53'

# Background primary -> deep navy
$css = $css -replace '#0a0e1a', '#0a1628'
$css = $css -replace '#111827', '#0f1f3a'
$css = $css -replace 'rgba\(17, 24, 39', 'rgba(15, 31, 58'
$css = $css -replace 'rgba\(10, 14, 26', 'rgba(10, 22, 40'

# Teal -> lime
$css = $css -replace '#14b8a6', '#65a30d'
$css = $css -replace 'rgba\(20, 184, 166', 'rgba(101, 163, 13'

# Pink -> bright lime accent
$css = $css -replace '#ec4899', '#bef264'
$css = $css -replace 'rgba\(236, 72, 153', 'rgba(190, 242, 100'

# Gradient updates
$css = $css -replace 'linear-gradient\(135deg, #84cc16, #a3e635\)', 'linear-gradient(135deg, #84cc16, #65a30d)'

# Shadow glow
$css = $css -replace 'rgba\(132, 204, 22, 0\.15\)', 'rgba(132, 204, 22, 0.2)'

# Content.js color updates
$contentJs = $contentJs -replace '#8b5cf6', '#84cc16'
$contentJs = $contentJs -replace '#3b82f6', '#a3e635'
$contentJs = $contentJs -replace '#14b8a6', '#65a30d'
$contentJs = $contentJs -replace '#ec4899', '#bef264'

# Keyword class color updates
$contentJs = $contentJs -replace 'kw-purple', 'kw-lime'
$contentJs = $contentJs -replace 'kw-blue', 'kw-bright'
$contentJs = $contentJs -replace 'kw-teal', 'kw-green'
$contentJs = $contentJs -replace 'kw-pink', 'kw-yellow'

$css = $css -replace '\.kw-purple', '.kw-lime'
$css = $css -replace '\.kw-blue', '.kw-bright'
$css = $css -replace '\.kw-teal', '.kw-green'
$css = $css -replace '\.kw-pink', '.kw-yellow'

# CSS variable overrides for the new color names
$css = $css -replace '--accent-purple:', '--accent-lime:'
$css = $css -replace 'var\(--accent-purple\)', 'var(--accent-lime)'
$css = $css -replace '--accent-blue:', '--accent-bright:'
$css = $css -replace 'var\(--accent-blue\)', 'var(--accent-bright)'
$css = $css -replace '--accent-teal:', '--accent-green:'
$css = $css -replace 'var\(--accent-teal\)', 'var(--accent-green)'
$css = $css -replace '--accent-pink:', '--accent-yellow:'
$css = $css -replace 'var\(--accent-pink\)', 'var(--accent-yellow)'

# --- Inline images as base64 data URIs ---
$imageDir = "copilot-training/images"
if (Test-Path $imageDir) {
    $imageFiles = Get-ChildItem -Path $imageDir -Filter "*.jpg"
    foreach ($img in $imageFiles) {
        $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($img.FullName))
        $dataUri = "data:image/jpeg;base64,$b64"
        $contentJs = $contentJs -replace [regex]::Escape("images/$($img.Name)"), $dataUri
    }
    Write-Host "Inlined $($imageFiles.Count) images as base64"
}

# Remove external CSS/JS links and replace with inline
$html = $html -replace '<link rel="stylesheet" href="styles.css">', "<style>`n$css`n</style>"
$html = $html -replace '  <!-- Scripts: content data first, then app logic -->\s*\n\s*<script src="content.js"></script>\s*\n\s*<script src="app.js"></script>', "  <script>`n$contentJs`n$appJs`n</script>"

# Write output (UTF-8 without BOM for proper emoji/special char rendering)
$outputPath = Join-Path (Get-Location) "copilot-training/copilot-training-embed.html"
[System.IO.File]::WriteAllText($outputPath, $html, $utf8)

$size = (Get-Item $outputPath).Length / 1KB
Write-Host "Created: $outputPath ($([math]::Round($size, 1)) KB)"
Write-Host "Ready to embed in Go High Level CRM!"
