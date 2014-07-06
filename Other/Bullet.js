var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(game, player) {
            _super.call(this, game, player.x, player.y - (.5 * player.height), Platformer.ResKeys.fireball);
            this.game = game;
            this.game.add.existing(this);
            this.animations.add('flying', [0, 1, 2, 3], 5);
            this.animations.add('hit', [4, 5, 6], 5);

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
        Bullet.prototype.update = function () {
            for (var i = 0; i < Platformer.CollisionManager.sluggers.length; i++) {
                if (this.game.physics.arcade.collide(this, Platformer.CollisionManager.sluggers[i])) {
                    this.animations.play('hit');
                    this.game.time.events.add(500, this.destroySelf, this);
                    Platformer.CollisionManager.sluggers[i].die();
                }
            }

            for (var k = 0; k < Platformer.CollisionManager.bats.length; k++) {
                if (this.game.physics.arcade.collide(this, Platformer.CollisionManager.bats[k])) {
                    this.animations.play('hit');
                    this.game.time.events.add(500, this.destroySelf, this);
                    Platformer.CollisionManager.bats[k].die();
                }
            }

            for (var j = 0; j < Platformer.CollisionManager.layers.length; j++) {
                if (this.game.physics.arcade.collide(this, Platformer.CollisionManager.layers[j])) {
                    this.animations.play('hit');
                    this.game.time.events.add(500, this.destroySelf, this);
                }
            }
        };

        Bullet.prototype.destroySelf = function () {
            this.destroy();
        };
        return Bullet;
    })(Phaser.Sprite);
    Platformer.Bullet = Bullet;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Bullet.js.map
