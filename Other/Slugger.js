var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Slugger = (function (_super) {
        __extends(Slugger, _super);
        function Slugger(game, x, y, player) {
            _super.call(this, game, x, y, Platformer.ResKeys.sluggerSprites);
            this.goingRight = true;
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

            this.deathSound = this.game.add.audio(Platformer.ResKeys.sluggerDeathSound);
        }
        Slugger.prototype.update = function () {
            this.animations.play('walk');

            if (this.game.physics.arcade.intersects(this.spriteBody, this.player.spriteBody) && this.player.attacking) {
                this.die();
                //,.  this.kill();
            } else if (this.game.physics.arcade.intersects(this.spriteBody, this.player.spriteBody)) {
                this.player.lives--;
                this.die();
                console.log(this.player.lives);
            }
        };

        Slugger.prototype.flipSlugger = function () {
            if (this.goingRight) {
                this.scale.x = -1;
                this.goingRight = false;
                this.spriteBody.velocity.x = -1 * this.spriteBody.velocity.x;
            } else {
                this.scale.x = 1;
                this.goingRight = true;
                this.spriteBody.velocity.x = -1 * this.spriteBody.velocity.x;
            }
        };

        Slugger.prototype.die = function () {
            var explosion = new Platformer.Explosion(this.game, this);
            this.deathSound.play('', null, 0.5);
            this.destroy();
            console.log(this.player.lives);
        };
        return Slugger;
    })(Phaser.Sprite);
    Platformer.Slugger = Slugger;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Slugger.js.map
