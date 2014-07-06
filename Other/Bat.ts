module Platformer {
    export class Bat extends Phaser.Sprite {

        game: Phaser.Game;
        player: Player;
        movingUp: boolean = true;
        spriteBody: Phaser.Physics.Arcade.Body;
        constructor(game: Phaser.Game, player: Player,x:number, y: number) {
            super(game, x, y, ResKeys.bat);
            this.game = game;
            this.player = player;

            this.game.add.existing(this);
            this.game.physics.arcade.enable(this);

            this.animations.add('flying', [ 'bat1.png' , 'bat2.png' , 'bat3.png', 'bat4.png', 'bat5.png', 'bat6.png', 'bat7.png'], 5);

            this.spriteBody = this.body;

            this.game.time.events.loop(2000, this.changeDirection, this);
        }

        update() {
            this.animations.play('flying');


            if (this.movingUp) {
                this.body.velocity.y = -50;
            } else {
                this.body.velocity.y = 50;
            }


            if (this.game.physics.arcade.intersects(this.spriteBody, this.player.spriteBody) && this.player.attacking) {
                this.die();
                //,.  this.kill();
            } else if (this.game.physics.arcade.intersects(this.spriteBody, this.player.spriteBody)) {
                this.player.lives--;
                this.die();
                console.log(this.player.lives);
            }
            
        }

        changeDirection() {
            if (this.movingUp) {
                this.movingUp = false;
            } else {
                this.movingUp = true;
            }
        }

        die() {
            var explosion = new Explosion(this.game, this);
         //   this.deathSound.play('', null, 0.5);
            this.destroy();
        }

    }


}