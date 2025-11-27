export class HUD {
    private speed: number;
    private lapTime: number;
    private playerPosition: number;

    constructor() {
        this.speed = 0;
        this.lapTime = 0;
        this.playerPosition = 1; // Default to first position
    }

    public update(speed: number, lapTime: number, playerPosition: number): void {
        this.speed = speed;
        this.lapTime = lapTime;
        this.playerPosition = playerPosition;
        this.render();
    }

    private render(): void {
        // Clear previous HUD
        this.clearHUD();

        // Display speed
        this.displaySpeed();

        // Display lap time
        this.displayLapTime();

        // Display player position
        this.displayPlayerPosition();
    }

    private clearHUD(): void {
        // Logic to clear the HUD display
    }

    private displaySpeed(): void {
        // Logic to display the current speed
    }

    private displayLapTime(): void {
        // Logic to display the current lap time
    }

    private displayPlayerPosition(): void {
        // Logic to display the player's position
    }
}