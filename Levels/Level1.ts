module Platformer {
    export class Level1 extends Phaser.State {
        player: Player;
        sluggers: Slugger[] = [];
        bats: Bat[] = [];
        xCoords: number[] = [671, 946, 1427, 1898, 2510 ];
        yCoords: number[] = [366, 426, 426, 156, 366];
        batXCoords: number[] = [3000, 2885, 2760, 2645, 2530, 2415, 2300];
        batYCoords: number[] = [666, 666, 666, 666, 666, 666, 666];
        map: Phaser.Tilemap;
        bg: Phaser.TileSprite;
        layer: Phaser.TilemapLayer;
       
        create() {

          //  this.game.physics.startSystem(Phaser.Physics.ARCADE);


            

            this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, ResKeys.backgroundImage);
            this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap(ResKeys.level1Map);
            this.map.addTilesetImage(ResKeys.level1Tiles, ResKeys.level1Tiles);
            this.map.setCollisionByExclusion([10,11,12]);
            this.layer = this.map.createLayer('Tile Layer 1');
            this.layer.resizeWorld();
            //this.layer.debug = true;

           // this.game.physics.enable(this.player);
            this.map.setLayer(this.layer);
            //25 or 26


            CollisionManager.layers.push(this.layer);

            this.player = new Player(this.game, 100, 100);
            this.game.camera.follow(new Followed(this.game, this.player), Phaser.Camera.FOLLOW_LOCKON);
            
            //this.map.setTileIndexCallback(26, this.player.die, this);
            this.map.setTileIndexCallback(27, this.player.die, this);

            for (var i = 0; i < this.xCoords.length; i++) {
                var newSlugger = new Slugger(this.game, this.xCoords[i], this.yCoords[i], this.player);
                this.sluggers.push(newSlugger);
                CollisionManager.sluggers.push(newSlugger);
                //console.log(this.sluggers.length);
                console.log(CollisionManager.sluggers.length);
            }

            for (var j = 0; j < this.batXCoords.length; j++) {
                var newBat = new Bat(this.game, this.player,  this.batXCoords[j], this.batYCoords[j]);
                this.bats.push(newBat);
                CollisionManager.bats.push(newBat);
            }
           
    
        }

        update() {
            this.game.physics.arcade.collide(this.player, this.layer);
            for (var i = 0; i < this.sluggers.length; i++) {
                this.game.physics.arcade.collide(this.sluggers[i], this.layer);
            }

            this.hud();
        }

        hud() {
            var lastX = 20;
            for (var i = 0; i < this.player.lives; i++) {
                var heart = this.game.add.sprite(lastX + 70, 40, ResKeys.heart);
            }
        }
    }
}