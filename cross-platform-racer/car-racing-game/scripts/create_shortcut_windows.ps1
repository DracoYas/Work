# PowerShell script to create a shortcut for the car racing game on Windows

$shortcutPath = "$env:USERPROFILE\Desktop\CarRacingGame.lnk"
$targetPath = "C:\path\to\your\car-racing-game\src\main.ts"  # Update this path to the actual executable or script to launch the game
$workingDirectory = "C:\path\to\your\car-racing-game"  # Update this path to the directory of your game

# Create a WScript.Shell COM object
$shell = New-Object -ComObject WScript.Shell

# Create the shortcut
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $targetPath
$shortcut.WorkingDirectory = $workingDirectory
$shortcut.IconLocation = "$workingDirectory\assets\sprites\icon.ico"  # Update this path to the actual icon file
$shortcut.Save()

Write-Host "Shortcut created on the desktop."