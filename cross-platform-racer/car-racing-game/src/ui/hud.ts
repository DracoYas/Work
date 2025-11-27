class HUD {
    constructor() {
        this.speed = 0;
        this.lapTime = 0;
        this.position = 1;
    }

    update(speed, lapTime, position) {
        this.speed = speed;
        this.lapTime = lapTime;
        this.position = position;
    }

    render(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`Speed: ${this.speed} km/h`, 10, 30);
        ctx.fillText(`Lap Time: ${this.lapTime.toFixed(2)} s`, 10, 60);
        ctx.fillText(`Position: ${this.position}`, 10, 90);
    }
}

export default HUD;