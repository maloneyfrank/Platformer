module Platformer {
    export class Boot extends Phaser.State {
        preload() {
            
        }

        create() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;

            //alert("called");
            this.game.state.start('Preloader', true, false);
        }
    }
}