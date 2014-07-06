module Platformer {
    export class Followed extends Phaser.Sprite{
        player: Player;
        game: Phaser.Game;
        constructor(game: Phaser.Game, player: Player) {
            super(game, player.x, (player.y - (.5 * player.height)), ResKeys.followed);
            this.player = player;
            this.game = game;
            this.game.add.existing(this);

            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            //console.log("inited");
        }

        update() {
            this.body.x = this.player.spriteBody.x;
            this.body.y = this.player.spriteBody.y;
        }
    }
}