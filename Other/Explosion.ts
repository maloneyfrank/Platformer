module Platformer {
    export class Explosion extends Phaser.Sprite{
        game: Phaser.Game;
        animRef: Phaser.Animation;

        constructor(game: Phaser.Game, caller: any) {
            super(game, caller.x, caller.y - caller.height, ResKeys.explosion);
            this.game = game;
            this.game.add.existing(this);
            this.animations.add('exploding', [1, 2, 3, 4, 5], 10);
            

        }

        update() {
            this.animRef = this.animations.play('exploding');
            this.game.time.events.add(200, this.gah, this);
        }
        gah() {
            this.destroy();
        }
    }
}