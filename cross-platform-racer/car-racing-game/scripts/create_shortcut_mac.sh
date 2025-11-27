#!/bin/bash

# Create a shortcut for launching the car racing game on macOS

GAME_NAME="Car Racing Game"
GAME_PATH="$(pwd)/../dist/main"  # Adjust the path to the compiled game executable if necessary
SHORTCUT_PATH="$HOME/Desktop/$GAME_NAME.app"

# Create the app bundle structure
mkdir -p "$SHORTCUT_PATH/Contents/MacOS"
mkdir -p "$SHORTCUT_PATH/Contents/Resources"

# Create the Info.plist file
cat <<EOL > "$SHORTCUT_PATH/Contents/Info.plist"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>$GAME_NAME</string>
    <key>CFBundleExecutable</key>
    <string>main</string>
    <key>CFBundleIdentifier</key>
    <string>com.example.carracinggame</string>
    <key>CFBundleVersion</key>
    <string>1.0</string>
    <key>CFBundleShortVersionString</key>
    <string>1.0</string>
</dict>
</plist>
EOL

# Create a symlink to the game executable
ln -s "$GAME_PATH" "$SHORTCUT_PATH/Contents/MacOS/main"

echo "Shortcut created at $SHORTCUT_PATH"