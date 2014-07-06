module Platformer {
    export class Slugger extends Phaser.Sprite{
        game: Phaser.Game;
        player: Player;
        spriteBody: Phaser.Physics.Arcade.Body;
        goingRight: boolean = true;
        deathSound: Phaser.Sound;
        constructor(game: Phaser.Game, x: number, y: number, player: Player) {
            super(game, x, y, ResKeys.sluggerSprites);
            this.game = game;
            this.game.add.existing(this);
            this.player = player;
            this.animations.add('walk', [0, 1, 2], 10);
            this.game.time.events.loop(3000, this.flipSlugger, this);


            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.spriteBody = this.body;

            this.spriteBody.acceleration.y = 200;
         //   this.spriteBody.acceleration.x = 0;
            this.spriteBody.velocity.x = 20;

            this.anchor.setTo(0.5, 1);

            this.deathSound = this.game.add.audio(ResKeys.sluggerDeathSound);
        }

        update() {
            this.animations.play('walk');

            if (this.game.physics.arcade.intersects(this.spriteBody, this.player.spriteBody) && this.player.attacking) {
                this.die();
              //,.  this.kill();
            } else if (this.game.physics.arcade.intersects(this.spriteBody, this.player.spriteBody)){
                this.player.lives--;
                this.die();
                console.log(this.player.lives);
            }


        }

        flipSlugger(){
            if (this.goingRight) {
                this.scale.x = -1;
                this.goingRight = false;
                this.spriteBody.velocity.x = -1 * this.spriteBody.velocity.x;
                
            } else {
                this.scale.x = 1;
                this.goingRight = true;
                this.spriteBody.velocity.x = -1 * this.spriteBody.velocity.x;
                
            }
        }

        die() {
            var explosion = new Explosion(this.game, this);
            this.deathSound.play('', null, 0.5);
            this.destroy();
            console.log(this.player.lives);
        }

    }
}