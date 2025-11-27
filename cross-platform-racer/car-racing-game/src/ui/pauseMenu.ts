class PauseMenu {
    constructor() {
        this.isPaused = false;
        this.menuOptions = ['Resume', 'Restart', 'Quit'];
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.showMenu();
        } else {
            this.hideMenu();
        }
    }

    showMenu() {
        console.log('Pause Menu:');
        this.menuOptions.forEach((option, index) => {
            console.log(`${index + 1}: ${option}`);
        });
    }

    hideMenu() {
        console.log('Game Resumed');
    }

    selectOption(optionIndex) {
        if (this.isPaused && optionIndex >= 0 && optionIndex < this.menuOptions.length) {
            switch (optionIndex) {
                case 0:
                    this.togglePause();
                    break;
                case 1:
                    this.restartGame();
                    break;
                case 2:
                    this.quitGame();
                    break;
                default:
                    console.log('Invalid option');
            }
        }
    }

    restartGame() {
        console.log('Game Restarted');
        // Logic to restart the game
    }

    quitGame() {
        console.log('Game Quit');
        // Logic to quit the game
    }
}

export default PauseMenu;