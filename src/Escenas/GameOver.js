import menu from "./menu.js";
import Play1 from "./Play1.js";


class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }
    preload(){
        this.load.image('Fondo', '../public/img/GameOver.jpg');
        this.load.image('Game','../public/img/Game.png');
        this.load.image('Replay','../public/img/Replay05.png');
        
    }
    create(){
        this.add.image(400,300,'Fondo');
        this.add.image(400,250,'Game');

        this.startButton = this.add.image(75, 525, 'Replay').setInteractive ();
        this.startButton.on ('pointerdown',() =>{ 
            this.scene.start("Play1");
        });

        this.startButton = this.add.image(675, 525, 'button').setInteractive ();
        this.startButton.on ('pointerdown',() =>{ 
            this.scene.start("Play");
        });

    }
    update(){
    }

}
export default GameOver;