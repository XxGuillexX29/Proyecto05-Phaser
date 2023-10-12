class Play extends Phaser.Scene {
    constructor() {
        super("Play"); //nombre de la escena
    }
    preload() {
        this.load.image('sky', '../public/img/sky.png'); // ubicacion de imagen del fondo
        this.load.image('red', '../public/img/red.png'); // ubicacion de imagen para las particulas
        this.load.image('shoot', '../public/img/shoot.png'); // ubicacion de imagen para el disparo de la NAVE
        this.load.image('shootEnemy', '../public/img/shootEnemy.png'); // ubicacion de imagen para el disparo del enemigo
        this.load.spritesheet('nave', '../public/img/nave.png', { frameWidth: 70, frameHeight: 62 }); // ubicacion y medidas  de imagen de Sprite de la NAVE        
        this.load.image('enemy', '../public/img/enemy.png'); // ubicacion y medidas de imagen del enemigo
    }
    create() {
        let fondo = this.add.image(400, 300, 'sky'); //Agregado de fondo de escena  

        let player = this.player = this.physics.add.sprite(100, 300, 'nave');

        const particles = this.add.particles(-25, 10, 'red', {
            speed: 40,
            angle: { min: 180, max: 180 },
            scale: { start: 0.75, end: 0 },
            blendMode: 'ADD'
        });
        const particles2 = this.add.particles(-25, -10, 'red', {
            speed: 40,
            angle: { min: 180, max: 180 },
            scale: { start: 0.75, end: 0 },
            blendMode: 'ADD'
        });

        this.player.setBounce(0.0);
        this.player.setCollideWorldBounds(true);

        particles.startFollow(this.player);
        particles2.startFollow(this.player);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('nave', { start: 1, end: 1 }),
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('nave', { start: 2, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();
                
        this.enemies = this.physics.add.group(); // Crea un grupo de enemigos
        
        for (let i = 0; i < 5; i++) { // Cambia el 5 por el número de enemigos que quieras generar
            let x = Phaser.Math.Between(0, 800);  // Ajusta la aparicion de los enemigos sobre X
            let y = Phaser.Math.Between(50, 550); // Ajusta la altura según sea necesario
            let enemy = this.enemies.create(x, y, 'enemy');
            enemy.setSize(30, 30); // Ajusta el tamaño del box collider
            enemy.setVelocity(Phaser.Math.Between(-100, -150), 0); // Velocidad X aleatoria dentro del rango -100 a -150
        
        }

        this.data.set('vida', 3);
        this.data.set('nivel', 1);
        this.data.set('puntaje', 0);

        var nivelVida = this.add.text(0, 5, '', { font: '30px Courier', fill: '#BF360C' }); 

        nivelVida.setText([         
            'Nivel: ' + this.data.get('nivel'),
            'Vida: ' + this.data.get('vida'),
        ]);

        var puntaje = this.add.text(550, 5, '', { font: '30px Courier', fill: '#BF360C' });

        puntaje.setText([
            'Puntaje: ' + this.data.get('puntaje')
        ]);


        
        
    }



    update() {
        if (this.cursors.left.isDown) 
        {
            this.player.setVelocityX(-100);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) 
        {
            this.player.setVelocityX(100);

            this.player.anims.play('right', true);
        }
        else if (this.cursors.down.isDown) 
        {

            this.player.setVelocityY(100);

            this.player.anims.play('down', true);
        }

        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-100);
            this.player.anims.play('up', true);
        }

        else if (this.cursors) {
            this.player.setVelocityY(0);
            this.player.setVelocity(0);
            this.player.anims.play('left', true);
        }
    }
}


export default Play;