var Platformer;
(function (Platformer) {
    var ResKeys = (function () {
        function ResKeys() {
        }
        ResKeys.playerSprite = "playerSprite";
        ResKeys.level1Map = "level1Map";
        ResKeys.level1Tiles = "grasstileset";
        ResKeys.sluggerSprites = "sluggerSprites";
        ResKeys.bat = "batSprites";
        ResKeys.backgroundImage = "backgroundImage";
        ResKeys.followed = "followed";
        ResKeys.explosion = "explosion";

        ResKeys.fireball = "fireball";
        ResKeys.heart = "heart";

        ResKeys.healthBar = "healthBar";
        ResKeys.manaBar = "manaBar";

        ResKeys.jumpSound = "jumpSound";
        ResKeys.bgMusic = "bgMusic";
        ResKeys.clawSound = "clawSound";
        ResKeys.sluggerDeathSound = "sluggerDeathSound";
        return ResKeys;
    })();
    Platformer.ResKeys = ResKeys;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=ResKeys.js.map
