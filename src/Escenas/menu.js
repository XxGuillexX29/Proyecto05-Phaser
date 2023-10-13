import Play from "./Play1.js";
class Menu extends Phaser.Scene {
    constructor () {
            super ("Menu");
    }
    
    preload () {
        this.load.image ('back','../public/img/espacio.jpg');
        this.load.image ('button','../public/img/Play.png');
    }

    create () {
        this.add.image(400, 300, 'back');

        this.startButton = this.add.image(400, 300, 'button').setInteractive();
        this.startButton.on ('pointerdown',() =>{ 
            this.scene.start("Play");
        });
    }
    
    update () {

    }

    }

    export default Menu;