class Menu {
    constructor() {
        this.menuItems = ["Start Game", "Settings", "Exit"];
        this.selectedItem = 0;
    }

    displayMenu() {
        console.clear();
        console.log("Main Menu");
        this.menuItems.forEach((item, index) => {
            if (index === this.selectedItem) {
                console.log(`> ${item}`);
            } else {
                console.log(`  ${item}`);
            }
        });
    }

    navigateUp() {
        this.selectedItem = (this.selectedItem > 0) ? this.selectedItem - 1 : this.menuItems.length - 1;
    }

    navigateDown() {
        this.selectedItem = (this.selectedItem < this.menuItems.length - 1) ? this.selectedItem + 1 : 0;
    }

    selectItem() {
        switch (this.selectedItem) {
            case 0:
                this.startGame();
                break;
            case 1:
                this.openSettings();
                break;
            case 2:
                this.exitGame();
                break;
        }
    }

    startGame() {
        console.log("Starting game...");
        // Logic to transition to the game scene
    }

    openSettings() {
        console.log("Opening settings...");
        // Logic to open settings menu
    }

    exitGame() {
        console.log("Exiting game...");
        // Logic to exit the game
    }
}

export default Menu;