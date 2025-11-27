export default class MouseInput {
    private mouseX: number = 0;
    private mouseY: number = 0;
    private isMouseDown: boolean = false;

    constructor() {
        this.initialize();
    }

    private initialize(): void {
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    private onMouseMove(event: MouseEvent): void {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
    }

    private onMouseDown(event: MouseEvent): void {
        this.isMouseDown = true;
    }

    private onMouseUp(event: MouseEvent): void {
        this.isMouseDown = false;
    }

    public getMousePosition(): { x: number; y: number } {
        return { x: this.mouseX, y: this.mouseY };
    }

    public isMousePressed(): boolean {
        return this.isMouseDown;
    }
}