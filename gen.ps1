$dir = "src/components"
New-Item -ItemType Directory -Force -Path $dir | Out-Null
function Write-TsxFile {
  param($path,$content)
  [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
}
