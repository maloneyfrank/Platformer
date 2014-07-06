///<reference path="phaser.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.call(this, 576, 540, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Platformer.Boot, true);
            this.state.add('Preloader', Platformer.Preloader, false);
            this.state.add('Level1', Platformer.Level1, false);
            this.state.add('Gameover', Platformer.Gameover, false);
            // this.state.start('Boot');
        }
        return Main;
    })(Phaser.Game);

    window.onload = function () {
        var game = new Main();
    };
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Main.js.map
