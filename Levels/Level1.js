var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
            this.sluggers = [];
            this.bats = [];
            this.xCoords = [671, 946, 1427, 1898, 2510];
            this.yCoords = [366, 426, 426, 156, 366];
            this.batXCoords = [3000, 2885, 2760, 2645, 2530, 2415, 2300];
            this.batYCoords = [666, 666, 666, 666, 666, 666, 666];
        }
        Level1.prototype.create = function () {
            //  this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, Platformer.ResKeys.backgroundImage);
            this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap(Platformer.ResKeys.level1Map);
            this.map.addTilesetImage(Platformer.ResKeys.level1Tiles, Platformer.ResKeys.level1Tiles);
            this.map.setCollisionByExclusion([10, 11, 12]);
            this.layer = this.map.createLayer('Tile Layer 1');
            this.layer.resizeWorld();

            //this.layer.debug = true;
            // this.game.physics.enable(this.player);
            this.map.setLayer(this.layer);

            //25 or 26
            Platformer.CollisionManager.layers.push(this.layer);

            this.player = new Platformer.Player(this.game, 100, 100);
            this.game.camera.follow(new Platformer.Followed(this.game, this.player), Phaser.Camera.FOLLOW_LOCKON);

            //this.map.setTileIndexCallback(26, this.player.die, this);
            this.map.setTileIndexCallback(27, this.player.die, this);

            for (var i = 0; i < this.xCoords.length; i++) {
                var newSlugger = new Platformer.Slugger(this.game, this.xCoords[i], this.yCoords[i], this.player);
                this.sluggers.push(newSlugger);
                Platformer.CollisionManager.sluggers.push(newSlugger);

                //console.log(this.sluggers.length);
                console.log(Platformer.CollisionManager.sluggers.length);
            }

            for (var j = 0; j < this.batXCoords.length; j++) {
                var newBat = new Platformer.Bat(this.game, this.player, this.batXCoords[j], this.batYCoords[j]);
                this.bats.push(newBat);
                Platformer.CollisionManager.bats.push(newBat);
            }
        };

        Level1.prototype.update = function () {
            this.game.physics.arcade.collide(this.player, this.layer);
            for (var i = 0; i < this.sluggers.length; i++) {
                this.game.physics.arcade.collide(this.sluggers[i], this.layer);
            }

            this.hud();
        };

        Level1.prototype.hud = function () {
            var lastX = 20;
            for (var i = 0; i < this.player.lives; i++) {
                var heart = this.game.add.sprite(lastX + 70, 40, Platformer.ResKeys.heart);
            }
        };
        return Level1;
    })(Phaser.State);
    Platformer.Level1 = Level1;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Level1.js.map
