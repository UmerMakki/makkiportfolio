# Run the dev server (fixes npm not in PATH in some terminals)
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
Set-Location $PSScriptRoot
npm run dev
