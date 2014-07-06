var Platformer;
(function (Platformer) {
    var CollisionManager = (function () {
        function CollisionManager() {
        }
        CollisionManager.sluggers = [];
        CollisionManager.bats = [];
        CollisionManager.layers = [];
        return CollisionManager;
    })();
    Platformer.CollisionManager = CollisionManager;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=CollisionManager.js.map
