// This file handles user input, capturing keyboard and mouse events to control the game.

class InputHandler {
    private keys: { [key: string]: boolean } = {};
    private mouse: { x: number; y: number; buttons: { [button: number]: boolean } } = { x: 0, y: 0, buttons: {} };

    constructor() {
        window.addEventListener('keydown', (event) => this.keyDownHandler(event));
        window.addEventListener('keyup', (event) => this.keyUpHandler(event));
        window.addEventListener('mousemove', (event) => this.mouseMoveHandler(event));
        window.addEventListener('mousedown', (event) => this.mouseDownHandler(event));
        window.addEventListener('mouseup', (event) => this.mouseUpHandler(event));
    }

    private keyDownHandler(event: KeyboardEvent) {
        this.keys[event.key] = true;
    }

    private keyUpHandler(event: KeyboardEvent) {
        this.keys[event.key] = false;
    }

    private mouseMoveHandler(event: MouseEvent) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
    }

    private mouseDownHandler(event: MouseEvent) {
        this.mouse.buttons[event.button] = true;
    }

    private mouseUpHandler(event: MouseEvent) {
        this.mouse.buttons[event.button] = false;
    }

    public isKeyPressed(key: string): boolean {
        return this.keys[key] || false;
    }

    public getMousePosition(): { x: number; y: number } {
        return { x: this.mouse.x, y: this.mouse.y };
    }

    public isMouseButtonPressed(button: number): boolean {
        return this.mouse.buttons[button] || false;
    }
}

export const inputHandler = new InputHandler();