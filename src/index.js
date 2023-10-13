import Menu from './Escenas/menu.js';
import Play from './Escenas/Play1.js';
import Play2 from './Escenas/Play2.js';
import Congratulations from './Escenas/Congratulations.js';
import GameOver from './Escenas/GameOver.js';

let config = {
    type: Phaser.AUTO,
    scale: {
        mode:Phaser.Scale.FIT, //escala automaticamente
        autoCenter:Phaser.Scale.CENTER_BOTH, //ceentra automaticamente
        width:  800, //Ancho de pantalla
        height: 600, //Alto de pantalla
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, //Gravedad del juego
            debug: false // muestra los hitbox de los componentes del juego
        }
    },
    scene: [Menu, Play, Play2, Congratulations, GameOver]
};

let game = new Phaser.Game(config);

/*let nave;
let enemy;*/
