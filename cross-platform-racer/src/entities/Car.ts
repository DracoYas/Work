export class Car {
    constructor(x, y) {
        this.position = { x: x, y: y };
        this.speed = 0;
        this.acceleration = 0.1;
        this.maxSpeed = 5;
        this.angle = 0;
    }

    update() {
        this.position.x += this.speed * Math.cos(this.angle);
        this.position.y += this.speed * Math.sin(this.angle);
        this.speed = Math.max(0, Math.min(this.maxSpeed, this.speed + this.acceleration));
    }

    steer(direction) {
        this.angle += direction * 0.05; // Adjust steering sensitivity
    }

    accelerate() {
        this.speed += this.acceleration;
        this.speed = Math.min(this.maxSpeed, this.speed);
    }

    brake() {
        this.speed -= this.acceleration;
        this.speed = Math.max(0, this.speed);
    }

    getPosition() {
        return this.position;
    }

    getSpeed() {
        return this.speed;
    }
}