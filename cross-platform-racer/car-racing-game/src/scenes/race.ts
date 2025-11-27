class RaceScene {
    constructor() {
        this.isRaceActive = false;
        this.lapTime = 0;
        this.startTime = 0;
        this.cars = [];
    }

    init(cars) {
        this.cars = cars;
        this.resetRace();
    }

    resetRace() {
        this.isRaceActive = false;
        this.lapTime = 0;
        this.startTime = 0;
    }

    startRace() {
        this.isRaceActive = true;
        this.startTime = performance.now();
    }

    update() {
        if (this.isRaceActive) {
            const currentTime = performance.now();
            this.lapTime = (currentTime - this.startTime) / 1000; // Convert to seconds
            this.updateCars();
        }
    }

    updateCars() {
        this.cars.forEach(car => {
            car.update(); // Assuming each car has an update method
        });
    }

    render(renderer) {
        if (this.isRaceActive) {
            renderer.clear();
            this.cars.forEach(car => {
                car.render(renderer); // Assuming each car has a render method
            });
            renderer.drawLapTime(this.lapTime);
        }
    }
}

export default RaceScene;