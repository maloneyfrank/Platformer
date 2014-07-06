var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Bat = (function (_super) {
        __extends(Bat, _super);
        function Bat(game, player, x, y) {
            _super.call(this, game, x, y, Platformer.ResKeys.bat);
            this.movingUp = true;
            this.game = game;
            this.player = player;

            this.game.add.existing(this);
            this.game.physics.arcade.enable(this);

            this.animations.add('flying', ['bat1.png', 'bat2.png', 'bat3.png', 'bat4.png', 'bat5.png', 'bat6.png', 'bat7.png'], 5);

            this.spriteBody = this.body;

            this.game.time.events.loop(2000, this.changeDirection, this);
        }
        Bat.prototype.update = function () {
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
        };

        Bat.prototype.changeDirection = function () {
            if (this.movingUp) {
                this.movingUp = false;
            } else {
                this.movingUp = true;
            }
        };

        Bat.prototype.die = function () {
            var explosion = new Platformer.Explosion(this.game, this);

            //   this.deathSound.play('', null, 0.5);
            this.destroy();
        };
        return Bat;
    })(Phaser.Sprite);
    Platformer.Bat = Bat;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Bat.js.map
