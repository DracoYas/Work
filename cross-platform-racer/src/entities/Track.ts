export class Track {
    private boundaries: { x: number; y: number; width: number; height: number }[];

    constructor() {
        this.boundaries = [];
        this.initializeTrack();
    }

    private initializeTrack() {
        // Define the boundaries of the track
        this.boundaries.push({ x: 0, y: 0, width: 800, height: 600 }); // Example boundary
        // Add more boundaries as needed
    }

    public render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'green'; // Track color
        this.boundaries.forEach(boundary => {
            ctx.fillRect(boundary.x, boundary.y, boundary.width, boundary.height);
        });
    }

    public checkBoundaries(carPosition: { x: number; y: number }): boolean {
        return this.boundaries.some(boundary => 
            carPosition.x >= boundary.x && 
            carPosition.x <= boundary.x + boundary.width &&
            carPosition.y >= boundary.y && 
            carPosition.y <= boundary.y + boundary.height
        );
    }
}