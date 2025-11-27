export class KeyboardInput {
    private keys: { [key: string]: boolean } = {};

    constructor() {
        window.addEventListener('keydown', (event) => this.onKeyDown(event));
        window.addEventListener('keyup', (event) => this.onKeyUp(event));
    }

    private onKeyDown(event: KeyboardEvent): void {
        this.keys[event.code] = true;
    }

    private onKeyUp(event: KeyboardEvent): void {
        this.keys[event.code] = false;
    }

    public isKeyPressed(key: string): boolean {
        return !!this.keys[key];
    }

    public getAcceleration(): number {
        return this.isKeyPressed('KeyW') ? 1 : this.isKeyPressed('KeyS') ? -1 : 0;
    }

    public getSteering(): number {
        return this.isKeyPressed('KeyA') ? -1 : this.isKeyPressed('KeyD') ? 1 : 0;
    }
}