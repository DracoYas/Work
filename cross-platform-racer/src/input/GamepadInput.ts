export default class GamepadInput {
    private gamepadIndex: number | null = null;

    constructor() {
        window.addEventListener("gamepadconnected", (event) => this.onGamepadConnected(event));
        window.addEventListener("gamepaddisconnected", (event) => this.onGamepadDisconnected(event));
    }

    private onGamepadConnected(event: GamepadEvent) {
        this.gamepadIndex = event.gamepad.index;
        console.log(`Gamepad connected at index ${this.gamepadIndex}`);
    }

    private onGamepadDisconnected(event: GamepadEvent) {
        if (this.gamepadIndex === event.gamepad.index) {
            console.log(`Gamepad disconnected from index ${this.gamepadIndex}`);
            this.gamepadIndex = null;
        }
    }

    public update() {
        if (this.gamepadIndex !== null) {
            const gamepad = navigator.getGamepads()[this.gamepadIndex];
            if (gamepad) {
                this.handleInput(gamepad);
            }
        }
    }

    private handleInput(gamepad: Gamepad) {
        const leftStickX = gamepad.axes[0];
        const leftStickY = gamepad.axes[1];
        const rightStickX = gamepad.axes[2];
        const rightStickY = gamepad.axes[3];

        const acceleration = gamepad.buttons[7].pressed; // L2 button
        const braking = gamepad.buttons[6].pressed; // R2 button
        const leftTurn = gamepad.buttons[4].pressed; // L1 button
        const rightTurn = gamepad.buttons[5].pressed; // R1 button

        // Handle acceleration, braking, and steering
        if (acceleration) {
            console.log("Accelerating");
        }
        if (braking) {
            console.log("Braking");
        }
        if (leftTurn) {
            console.log("Turning left");
        }
        if (rightTurn) {
            console.log("Turning right");
        }

        // Handle camera adjustments with right stick
        if (rightStickX !== 0 || rightStickY !== 0) {
            console.log(`Camera adjustment: X=${rightStickX}, Y=${rightStickY}`);
        }
    }
}