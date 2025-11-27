#!/bin/bash

# Create a desktop entry for the car racing game
echo "[Desktop Entry]" > ~/.local/share/applications/car-racing-game.desktop
echo "Version=1.0" >> ~/.local/share/applications/car-racing-game.desktop
echo "Type=Application" >> ~/.local/share/applications/car-racing-game.desktop
echo "Name=Car Racing Game" >> ~/.local/share/applications/car-racing-game.desktop
echo "Exec=sh /path/to/car-racing-game/src/main.ts" >> ~/.local/share/applications/car-racing-game.desktop
echo "Icon=/path/to/car-racing-game/assets/icon.png" >> ~/.local/share/applications/car-racing-game.desktop
echo "Terminal=false" >> ~/.local/share/applications/car-racing-game.desktop
echo "Categories=Game;" >> ~/.local/share/applications/car-racing-game.desktop

# Update the desktop database
update-desktop-database ~/.local/share/applications/