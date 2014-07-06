module Platformer {
    export class Bullet extends Phaser.Sprite {
        game: Phaser.Game;
        constructor(game: Phaser.Game, player: Player) {
            super(game, player.x, player.y - (.5 * player.height), ResKeys.fireball);
            this.game = game;
            this.game.add.existing(this);
            this.animations.add('flying', [0, 1, 2, 3], 5);
            this.animations.add('hit', [4,5,6], 5);

            this.game.physics.arcade.enable(this);

            this.anchor.setTo(.5);

            if (player.facingRight) {
                this.body.velocity.x = 500;
            } else {
                this.body.velocity.x = -500;
                this.scale.x = -1;
            }
            this.animations.play('flying');

        }

        update() {
            for (var i = 0; i < CollisionManager.sluggers.length; i++) {
                if (this.game.physics.arcade.collide(this, CollisionManager.sluggers[i])) {
                    this.animations.play('hit');
                    this.game.time.events.add(500, this.destroySelf, this);
                    CollisionManager.sluggers[i].die();
                }
            }

            for (var k = 0; k < CollisionManager.bats.length; k++) {
                if (this.game.physics.arcade.collide(this, CollisionManager.bats[k])) {
                    this.animations.play('hit');
                    this.game.time.events.add(500, this.destroySelf, this);
                    CollisionManager.bats[k].die();
                }
            }

            for (var j = 0; j < CollisionManager.layers.length; j++) {
                if (this.game.physics.arcade.collide(this, CollisionManager.layers[j])) {
                    this.animations.play('hit');
                    this.game.time.events.add(500, this.destroySelf, this);
                }
            }
        }

        destroySelf() {
            this.destroy();
        }
    }
}