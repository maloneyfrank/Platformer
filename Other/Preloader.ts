module Platformer {
    export class Preloader extends Phaser.State{
        preload() {

            this.game.load.atlasJSONArray(ResKeys.playerSprite, 'assets/player.png', 'assets/player.json');
            this.game.load.tilemap(ResKeys.level1Map, 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image(ResKeys.level1Tiles, 'assets/grasstileset.gif');
            this.game.load.spritesheet(ResKeys.sluggerSprites, 'assets/slugger.gif', 29.66, 25);
            this.game.load.image(ResKeys.backgroundImage, 'assets/grassbg1.gif');
            this.game.load.image(ResKeys.followed, 'assets/followed.png');
            this.game.load.spritesheet(ResKeys.explosion, 'assets/explosion.gif', 30, 30);
            this.game.load.audio(ResKeys.jumpSound, 'assets/jump.mp3');
            this.game.load.audio(ResKeys.bgMusic, 'assets/bgMusic.mp3');
            this.game.load.audio(ResKeys.clawSound, 'assets/claw.mp3');
            this.game.load.audio(ResKeys.sluggerDeathSound, 'assets/sluggerDeath.mp3');
            this.game.load.spritesheet(ResKeys.fireball, 'assets/fireball.gif', 30, 30);
            this.game.load.image(ResKeys.heart, 'assets/heart.png');
            this.game.load.atlasJSONHash(ResKeys.bat, 'assets/batAnims.png', 'assets/batAnims.json');
            this.game.load.image(ResKeys.healthBar, 'assets/healthBar.png');
            this.game.load.image(ResKeys.manaBar, 'assets/manaBar.png');
        }

        create() {
            this.game.state.start('Level1', true, false);
        }
    }
}