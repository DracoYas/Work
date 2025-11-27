# Cross-Platform Racer

Welcome to the Cross-Platform Racer project! This is a functional car racing video game designed to work seamlessly on both Mac and Windows platforms. The game supports multiple control schemes, including keyboard, mouse/trackpad, and gamepad controls.

## Project Structure

The project is organized into the following directories and files:

- **src/**: Contains the source code for the game.
  - **main.ts**: Entry point of the application, initializes the game engine and manages scene transitions.
  - **index.html**: Main HTML file that loads the game.
  - **scenes/**: Contains scene files for different stages of the game.
    - **BootScene.ts**: Handles initial loading of assets and sets up the game environment.
    - **PreloadScene.ts**: Manages loading of game assets before starting the main game.
    - **GameScene.ts**: Contains the main gameplay logic, including rendering and collision handling.
  - **entities/**: Contains classes representing game entities.
    - **Car.ts**: Represents the player's car with movement and collision handling.
    - **Track.ts**: Represents the race track and boundary checks.
  - **input/**: Manages input controls for the game.
    - **KeyboardInput.ts**: Handles keyboard controls.
    - **MouseInput.ts**: Manages mouse and trackpad controls.
    - **GamepadInput.ts**: Handles input from gamepads.
  - **ui/**: Contains user interface components.
    - **HUD.ts**: Manages the heads-up display for game information.
    - **Menu.ts**: Handles the main and pause menus.
  - **physics/**: Implements the physics for car movement.
    - **RacingPhysics.ts**: Handles acceleration, braking, and collision response.
  - **types/**: Contains TypeScript type definitions.
    - **index.d.ts**: Defines interfaces and types used throughout the game.

- **assets/**: Contains game assets.
  - **audio/**: Directory for audio assets.
    - **README.md**: Information about audio assets.
  - **tracks/**: Directory for track assets.
    - **README.md**: Information about track assets.
  - **sprites/**: Directory for sprite assets.
    - **README.md**: Information about sprite assets.

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.
- **vite.config.ts**: Configuration file for Vite, the build tool used for the project.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: This documentation file.

## Getting Started

To get started with the Cross-Platform Racer project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to play the game!

## Gameplay

In Cross-Platform Racer, players can choose their control scheme and race against opponents on various tracks. The game features realistic physics, stunning graphics, and an engaging user interface.

Enjoy racing!