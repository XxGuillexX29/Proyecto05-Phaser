import Play from './Escenas/Play1.js';

let config = {
    type: Phaser.AUTO,
    width:  800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Play]
};

let game = new Phaser.Game(config);