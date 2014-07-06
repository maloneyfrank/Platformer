var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Followed = (function (_super) {
        __extends(Followed, _super);
        function Followed(game, player) {
            _super.call(this, game, player.x, (player.y - (.5 * player.height)), Platformer.ResKeys.followed);
            this.player = player;
            this.game = game;
            this.game.add.existing(this);

            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            //console.log("inited");
        }
        Followed.prototype.update = function () {
            this.body.x = this.player.spriteBody.x;
            this.body.y = this.player.spriteBody.y;
        };
        return Followed;
    })(Phaser.Sprite);
    Platformer.Followed = Followed;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Followed.js.map
