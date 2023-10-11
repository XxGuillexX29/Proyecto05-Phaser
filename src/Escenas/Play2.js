/*class Play2 extends Phaser.Scene {
    constructor() {
        super("Play2");
    }
    preload() {
        this.load.image('tierra', '../public/img/desierto.png');
        this.load.image('red', '../public/img/red.png');
        this.load.image('shoot', '../public/img/shoot.png');
        this.load.image('shootEnemy', '../public/img/shootEnemy.png');
        this.load.spritesheet('nave', '../public/img/nave.png', { frameWidth: 70, frameHeight: 62 });
        this.load.spritesheet('enemy','../public/img/enemy.png',{ frameWidth: 70, frameHeight: 62 });
        this.load.spritesheet('jefe','../public/img/jefeFinal1.png',{ frameWidth: 130, frameHeight: 97 });
    }
    create() {
        this.add.image(400, 300, 'tierra');
    
        this.player = this.physics.add.sprite(100, 300, 'nave');

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

        this.player.setBounce(0.2);
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

         // Agregar enemigos aleatorios (entre 1 y 5)
         const numEnemies = Phaser.Math.Between(1, 5);
         this.enemies = this.physics.add.group();
 
         for (let i = 0; i < numEnemies; i++) {
             let x = Phaser.Math.Between(800, 1600); // Aparecerán fuera de la pantalla
             let y = Phaser.Math.Between(50, 550); // Ajusta la altura según sea necesario
             let enemy = this.enemies.create(x, y, 'enemy');
             enemy.setVelocity(Phaser.Math.Between(-100, -300), 0);
         }
 
         // Agregar al jefe final
         this.boss = this.physics.add.sprite(800, 300, 'jefe');
         this.boss.setVelocity(Phaser.Math.Between(-50, -150), Phaser.Math.Between(-10, 10)); // Ajusta la velocidad y movimiento
 
         // Configurar colisiones
         this.physics.add.collider(this.enemies, this.enemies);
         this.physics.add.collider(this.boss, this.enemies);
 
         this.physics.add.overlap(this.player, this.enemies, this.handleEnemyCollision, null, this);
         this.physics.add.overlap(this.player, this.boss, this.handleBossCollision, null, this);
     
    }
     

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-100);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(100);

            this.player.anims.play('right', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(100);

            this.player.anims.play('down', true);
        }

        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-100);
            this.player.anims.play('up', true);
        }

    }

    handleEnemyCollision(player, enemy) {
        enemy.destroy();
        this.score += 10;
        this.scoreText.setText('Puntaje: ' + this.score);
    }

    handleBossCollision(player, boss) {
        boss.destroy();
        this.score += 250;
        this.scoreText.setText('Puntaje: ' + this.score);
        this.scene.start('Creditos'); // Cambia 'Creditos' por el nombre de tu escena de créditos
    }
      
}
export default Play2;*/