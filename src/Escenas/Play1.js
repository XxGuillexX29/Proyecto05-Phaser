class Play extends Phaser.Scene {
    
    constructor() {
        super({key: "Play"}); //nombre de la escena
        
        this.scoreText = "";
        this.score = 0;

        this.vidaText = "";
        this.vida = 100;
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

         // crea el disparo 
        this.input.keyboard.on('keydown', (event) => {
            if (event.keyCode === 32) {
                this.shoot();  // llama al disparo al apretar la barra espaciadora 
            }
        });

        this.add.image(400, 300, 'sky'); //Agregado de fondo de escena  

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

        this.player.setBounce(0.0);
        this.player.setCollideWorldBounds(true);

        this.time.addEvent({
            delay:3000,
            callback:this.crearEnemigos,
            callbackScope:this,
            repeat:-1
        });

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

         this.physics.add.collider(this.player, this.enemies);

         this.cursors = this.input.keyboard.createCursorKeys();

         //Para controlar el puntaje
         this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
         //se crea el puntaje 
         this.vidaText = this.add.text(16,50,'Vida: 100',{fontSize : '32px',fill: '#000'});

        

       /* //FISICAS DE LA BALA EN ESCENA
        var Bala = new Phaser.Class({
            Extends: Phaser.GameObjects.Image,
            initialize:

                function Bullet(scene) {
                    Phaser.GameObjects.Image.call(this, scene, 0, 0, 'shoot');
                    this.speed = Phaser.Math.GetSpeed(500, 1);
                },

            fire: function (x, y) {
                this.setPosition(x + 120, y );
                this.setActive(true);
                this.setVisible(true);
            },
            update: function (time, delta) {
                this.y -= this.speed * delta;

                if (this.x < 120) {
                    this.setActive(false);
                    this.setVisible(false);
                }
            },

        });*/

       /* //VARIABLE GLOBAL DE BALA LOS ATRIBUTOS DE ATRAS
        balas = this.physics.add.group({
            classType: Bala,
            maxSize: 20,
            runChildUpdate: true,
        });*/

        /*this.enemies = this.physics.add.group(); // Crea un grupo de enemigos
        
        for (let i = 0; i < 5; i++) { // Cambia el 5 por el número de enemigos que quieras generar
            let x = Phaser.Math.Between(800, 850);  // Ajusta la aparicion de los enemigos sobre X
            let y = Phaser.Math.Between(50, 550); // Ajusta la altura según sea necesario
            let enemy = this.enemies.create(x, y, 'enemy');
          
            enemy.setSize(40, 40); // Ajusta el tamaño del box collider
            enemy.setVelocity(Phaser.Math.Between(-100, -150), 0); // Velocidad X aleatoria dentro del rango -100 a -150
                                              
           
          /*  this.time.addEvent({
                loop: -1,
                callback: () => {
                    console.log(' el evento es infinito.');
                },
                callbackScope: this,
            }); 

            this.enemies.checkWorldBounds = true;

            this.enemies.on('outOfBounds', () => {
                // Cuando los enemies salen de los límites del mundo
                this.enemies.destroy(); // Eliminar el sprite
            });          
        }*/

        

        /*let disparo =  this.add.image(400, 300, 'shoot'); 

        this.input.on('pointerdown', () => this.diparo());

        this.input.keyboard.on('keydown-SPACE', this.disparo, this)*/

        
          

       /*this.time.delayedCall(Phaser.Math.Between(1000, 5000), this.shootEnemy, [enemy, this], this); // Disparo aleatorio entre 1 y 5 segundos
            
        this.physics.add.collider(this.bullets, this.enemies, this.handleBulletEnemyCollision, null, this);
        this.physics.add.collider(this.player, this.enemies, this.handlePlayerEnemyCollision, null, this);
    
        handleBulletEnemyCollision(bullet,enemy) 
            bullet.destroy();
            enemy.destroy();
            // Añade aquí la lógica para incrementar el puntaje por eliminar un enemigo */
        
        
    }      
    

    update() {

                        //si llega a puntaje 200 pasa de nivel
                        if (this.score == 200) {
                            this.gameMusic.destroy();
                            this.scene.start('Escena2', { score: this.score });
                            console.log("cambio escena");
                        }

                        //si pierde todas las vidas
                        if (this.vida == 0) {

                            this.scene.start('FinDelJuego');
                            this.gameMusic.destroy();
                            console.log("game over");
                            //this.scene.start('End',{puntaje:this.puntaje}); PARA LLEVAR EL PUNTAJE
                        }

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

    crearEnemigos() {
        let enemy;
        if (!this.enemiesGroup) {
            this.enemiesGroup = this.physics.add.group();
        }

        // Creamos enemigos
        for (let i = 0; i < 5; i++) {
            let enemyX = Phaser.Math.Between(850, 800);
            let enemyY = Phaser.Math.Between(25, 550);

            enemy = this.enemiesGroup.create(enemyX, enemyY, 'enemy');
            enemy.setVelocityX(-100);

            // Establecemos las colisiones y eventos para cada enemigo
            this.physics.add.overlap(this.player, enemy, this.ColisionEnemy, null, this);

            enemy.checkWorldBounds = true;
            // Hace que el enemigo se destruya cuando sale de la pantalla
            enemy.outOfBoundsKill = true;
        }
        else if (this.cursors) {
            this.player.setVelocityY(0);
            this.player.setVelocity(0);
            this.player.anims.play('left', true);
        }

    }

    //Colisión entre el jugador y las estrellas
    ColisionEnemy(player, enemy) {

        console.log("colision");
        /*al detectar colision entre player y enemy, desaparecen enemy */
        enemy.disableBody(true, true);
        this.vida -= 10;
        this.vidaText.setText('Vida: ' + this.vida);
        /*star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);*/

    }


    // funcion de disparo 
    //faltaria agregar la funcion de colision entre bala y enemigo
    shoot() {

        if (!this.balaGroup) {
            this.balaGroup = this.physics.add.group();
        }

        let bala = this.balaGroup.create(this.player.x, this.player.y, 'shoot');

        let velocidadBala = 300;
        bala.setScale(1);

        bala.setVelocity(velocidadBala, 0);

        //bala.setCollideWorldBounds(false);
        //this.physics.add.overlap(bala, this.enemiesGroup, this.ColisionEnemyBala, null, this);

        this.physics.add.overlap(bala, this.enemiesGroup, this.ColisionEnemyBala, null, this)
        //console.log("Disparo realizado");
    }
    //Colisión entre la bala y el enemigo
    ColisionEnemyBala(bala, enemy) {

        // detecta colision bala enemigo y elimina bala
        bala.disableBody(true, true);

        // detecta colision bala enemigo y elimina enemy
        enemy.disableBody(true, true);

        // elimina un enemigo de enemiesGroup
        this.enemiesGroup.remove(enemy);
        console.log("colision2");

        //this.enemiesGroup.disableBody(true, true);




        /*al detectar colision entre la bala y el enemigo, desaparecen enemy */
        //enemy.disableBody(true,true);


        //enemy.checkWorldBounds = true;
        // Hace que el enemigo se destruya cuando sale de la pantalla
        //enemy.outOfBoundsKill = true; 


        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

    }


   /* disparo() {
        this.shoot.setVelocityX(200);
        }*/
}

export default Play;