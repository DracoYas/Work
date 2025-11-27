class Renderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d')!;
    }

    public clear(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawImage(image: HTMLImageElement, x: number, y: number, width: number, height: number): void {
        this.context.drawImage(image, x, y, width, height);
    }

    public drawRect(x: number, y: number, width: number, height: number, color: string): void {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    public render(entities: any[]): void {
        this.clear();
        entities.forEach(entity => {
            if (entity.image) {
                this.drawImage(entity.image, entity.x, entity.y, entity.width, entity.height);
            } else {
                this.drawRect(entity.x, entity.y, entity.width, entity.height, entity.color);
            }
        });
    }
}

export default Renderer;