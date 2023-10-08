class Play extends Phaser.Scene{
    constructor(){
        super("Play");
    }
    preload(){
        this.load.image('sky', '../public/img/sky.png');
        this.load.image('red', '../public/img/red.png');
        this.load.image('shoot', '../public/img/shoot.png');
        this.load.spritesheet('nave', '../public/img/nave.png', {frameWidth: 70, frameHeight: 62});
    }
    create(){
        this.add.image(400,300,'sky');

        this.player = this.physics.add.sprite(100,300,'nave');

        const particles = this.add.particles(-25, 10, 'red', {
            speed: 100,
            angle : { min: 180, max: 180 },
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD'
        });
        const particles2 = this.add.particles(-25, -10, 'red', {
            speed: 100,
            angle : { min: 180, max: 180 },
            scale: { start: 0.5, end: 0 },
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
    }
    update(){
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
        
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);
        
            this.player.anims.play('right', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(160);
        
            this.player.anims.play('down', true);
        }
        
       else  if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-160);
            this.player.anims.play('up', true);
        }

    }
    
}
export default Play;