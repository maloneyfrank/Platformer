///<reference path="phaser.d.ts" />

module Platformer {
     class Main extends Phaser.Game {
        constructor() {
            super(576, 540, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Boot, true);
            this.state.add('Preloader', Preloader, false);
            this.state.add('Level1', Level1, false);
            this.state.add('Gameover', Gameover, false);
            

           // this.state.start('Boot');
        }
    }

    window.onload = function (){
        var game = new Main();
     }
}