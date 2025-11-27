class Car {
    constructor(x, y) {
        this.position = { x: x, y: y };
        this.speed = 0;
        this.acceleration = 0.1;
        this.deceleration = 0.05;
        this.maxSpeed = 5;
        this.width = 50; // Width of the car
        this.height = 30; // Height of the car
    }

    update() {
        this.position.x += this.speed;

        // Apply acceleration and deceleration
        if (this.speed < this.maxSpeed) {
            this.speed += this.acceleration;
        } else {
            this.speed -= this.deceleration;
        }

        // Prevent speed from going negative
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    draw(context) {
        context.fillStyle = 'red'; // Color of the car
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    reset() {
        this.position.x = 0;
        this.position.y = 0;
        this.speed = 0;
    }
}