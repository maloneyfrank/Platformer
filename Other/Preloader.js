var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.game.load.atlasJSONArray(Platformer.ResKeys.playerSprite, 'assets/player.png', 'assets/player.json');
            this.game.load.tilemap(Platformer.ResKeys.level1Map, 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image(Platformer.ResKeys.level1Tiles, 'assets/grasstileset.gif');
            this.game.load.spritesheet(Platformer.ResKeys.sluggerSprites, 'assets/slugger.gif', 29.66, 25);
            this.game.load.image(Platformer.ResKeys.backgroundImage, 'assets/grassbg1.gif');
            this.game.load.image(Platformer.ResKeys.followed, 'assets/followed.png');
            this.game.load.spritesheet(Platformer.ResKeys.explosion, 'assets/explosion.gif', 30, 30);
            this.game.load.audio(Platformer.ResKeys.jumpSound, 'assets/jump.mp3');
            this.game.load.audio(Platformer.ResKeys.bgMusic, 'assets/bgMusic.mp3');
            this.game.load.audio(Platformer.ResKeys.clawSound, 'assets/claw.mp3');
            this.game.load.audio(Platformer.ResKeys.sluggerDeathSound, 'assets/sluggerDeath.mp3');
            this.game.load.spritesheet(Platformer.ResKeys.fireball, 'assets/fireball.gif', 30, 30);
            this.game.load.image(Platformer.ResKeys.heart, 'assets/heart.png');
            this.game.load.atlasJSONHash(Platformer.ResKeys.bat, 'assets/batAnims.png', 'assets/batAnims.json');
            this.game.load.image(Platformer.ResKeys.healthBar, 'assets/healthBar.png');
            this.game.load.image(Platformer.ResKeys.manaBar, 'assets/manaBar.png');
        };

        Preloader.prototype.create = function () {
            this.game.state.start('Level1', true, false);
        };
        return Preloader;
    })(Phaser.State);
    Platformer.Preloader = Preloader;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Preloader.js.map
