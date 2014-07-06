var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion(game, caller) {
            _super.call(this, game, caller.x, caller.y - caller.height, Platformer.ResKeys.explosion);
            this.game = game;
            this.game.add.existing(this);
            this.animations.add('exploding', [1, 2, 3, 4, 5], 10);
        }
        Explosion.prototype.update = function () {
            this.animRef = this.animations.play('exploding');
            this.game.time.events.add(200, this.gah, this);
        };
        Explosion.prototype.gah = function () {
            this.destroy();
        };
        return Explosion;
    })(Phaser.Sprite);
    Platformer.Explosion = Explosion;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Explosion.js.map
