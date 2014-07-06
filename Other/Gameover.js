var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Gameover = (function (_super) {
        __extends(Gameover, _super);
        function Gameover() {
            _super.apply(this, arguments);
        }
        Gameover.prototype.create = function () {
            alert('you are dead');
        };
        return Gameover;
    })(Phaser.State);
    Platformer.Gameover = Gameover;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Gameover.js.map
