import { Game } from './game';

const game = new Game();

function main() {
    game.initialize();
    game.start();
    
    function gameLoop() {
        game.update();
        game.render();
        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
}

window.onload = main;