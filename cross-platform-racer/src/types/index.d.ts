// TypeScript type definitions for the cross-platform racing game

// Interface for a car entity
interface Car {
    id: string;
    position: { x: number; y: number };
    speed: number;
    direction: number; // Angle in degrees
    accelerate(): void;
    brake(): void;
    steer(angle: number): void;
}

// Interface for a track entity
interface Track {
    id: string;
    boundaries: { x: number; y: number }[]; // Array of boundary points
    render(): void;
    checkBoundary(car: Car): boolean; // Check if the car is within track boundaries
}

// Input types for different control methods
type InputMethod = 'keyboard' | 'mouse' | 'gamepad';

// Interface for input handling
interface InputHandler {
    method: InputMethod;
    update(): void; // Update input state
}

// HUD interface for displaying game information
interface HUD {
    speed: number;
    lapTime: number;
    playerPosition: number;
    updateDisplay(): void; // Update the HUD display
}

// Menu interface for game menus
interface Menu {
    options: string[];
    selectedOption: number;
    navigate(direction: number): void; // Navigate through menu options
    select(): void; // Select the current option
}