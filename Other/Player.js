var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Platformer;
(function (Platformer) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, Platformer.ResKeys.playerSprite);
            this.facingRight = true;
            this.canDoubleJump = true;
            this.jumpHeight = 275;
            this.isJumping = false;
            this.gravity = 400;
            this.walkingSpeed = 225;
            this.isFalling = false;
            this.attacking = false;
            this.lives = 3;
            this.mana = 100;
            this.canAnim = true;
            this.game = game;
            this.x = x;
            this.y = y;

            this.game.add.existing(this);

            /*this.animations.add('runningRight', [9, 10, 11, 12, 13, 14, 15, 16], 10);
            this.animations.add('runningLeft', [44, 43, 42, 41, 40, 39, 38, 37], 10);
            this.animations.add('stillRight', [0, 1, 2, 3], 5);
            this.animations.add('stillLeft', [32, 33, 34, 35], 5);
            this.animations.add('jumpRight', [19, 20, 21, 22, 23, 24, 25, 26], 8);
            this.animations.add('jumpLeft', [53, 52, 51, 50, 49, 48, 47, 46, 45], 8);
            */
            this.animations.add('idle', ['idle1.png', 'idle2.png'], 1);
            this.animations.add('walk', ['walk1.png', 'walk2.png', 'walk3.png', 'walk4.png', 'walk5.png', 'walk6.png', 'walk7.png', 'walk8.png'], 10);
            this.animations.add('jump', ['jump1.png'], 10);
            this.animations.add('shoot', ['shoot1.png', 'shoot2.png'], 5);
            this.animations.add('claw', ['claw1.png', 'claw2.png', 'claw3.png', 'claw4.png', 'claw5.png'], 15);
            this.animations.add('glide', ['glide1.png', 'glide2.png', 'glide3.png', 'glide4.png'], 10);

            /*   this.animations.add('still', [0,1], 1);
            this.animations.add('running', [12,13,14,15,16,17,18], 10);
            this.animations.add('jumping', [22], 10);
            this.animations.add('gliding', [44, 45, 46, 47], 10);
            this.animations.add('shooting', [55, 56], 3);
            this.animations.add('clawing', [66], 1);*/
            //Sounds
            this.jumpSound = this.game.add.audio(Platformer.ResKeys.jumpSound);
            this.bgMusic = this.game.add.audio(Platformer.ResKeys.bgMusic);
            this.clawSound = this.game.add.audio(Platformer.ResKeys.clawSound);

            //Physics
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.spriteBody = this.body;
            this.anchor.setTo(.5, 1);

            //Bools
            this.attacking = false;

            //Initialization
            this.bgMusic.play('', null, 0.5, true);

            //Timers
            this.game.time.events.loop(1000, this.regenMana, this);

            //HUD Setup
            this.healthBar = this.game.add.sprite(this.x, this.y - this.height - 30, Platformer.ResKeys.healthBar);
            this.manaBar = this.game.add.sprite(this.x, this.y - this.height - 15, Platformer.ResKeys.manaBar);
            this.game.physics.arcade.enable(this.healthBar);
            this.game.physics.arcade.enable(this.manaBar);
        }
        Player.prototype.update = function () {
            this.spriteBody.velocity.x = 0;
            this.spriteBody.acceleration.y = this.gravity;

            //if (this.attacking == false) {
            //Timers
            if (this.lives < 1) {
                this.die();
            }

            this.hud();

            if (this.isFalling && this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.playAnim('glide', true);
                this.spriteBody.acceleration.y = this.gravity / 4;
                this.spriteBody.velocity.x = 150;
            } else if (this.isFalling && this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.playAnim('glide', true);
                this.spriteBody.acceleration.y = this.gravity / 4;
                this.spriteBody.velocity.x = -150;
            } else if (this.isFalling && this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.playAnim('glide', true);
                this.spriteBody.acceleration.y = this.gravity / 4;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.isJumping) {
                this.playAnim('jump', true);
                this.spriteBody.velocity.x = 150;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.isJumping) {
                this.playAnim('jump', true);
                this.spriteBody.velocity.x = -150;
            } else if (this.isJumping) {
                this.playAnim('jump', true);
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.playAnim('walk', true);
                this.scale.x = -1;
                this.spriteBody.velocity.x = -this.walkingSpeed;
                this.facingRight = false;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.playAnim('walk', true);
                this.scale.x = 1;
                this.spriteBody.velocity.x = this.walkingSpeed;
                this.facingRight = true;
            } else if (this.facingRight) {
                this.playAnim('idle', true);
            } else {
                this.playAnim('idle', true);
            }
            if (this.game.input.keyboard.justPressed(Phaser.Keyboard.UP) && this.spriteBody.onFloor()) {
                this.spriteBody.velocity.y -= this.jumpHeight;

                /*  if (this.canDoubleJump) {
                this.canDoubleJump = false;
                } else {
                this.canDoubleJump = true;
                }*/
                this.isJumping = true;
                this.jumpSound.play('', null, 0.1);
            }
            if (this.game.input.keyboard.justPressed(Phaser.Keyboard.Z) && !this.attacking) {
                // alert("into the logic");
                // alert(this.attacking);
                // this.attackRef = this.animations.play('claw');
                this.playAnim('claw', false, this.canAttack);

                if (this.facingRight) {
                    this.spriteBody.acceleration.x = 2500;
                } else {
                    this.spriteBody.acceleration.x = -2500;
                }
                this.game.time.events.add(500, this.resetAccel, this);
                this.attacking = true;
                this.clawSound.play('', null, 0.5);
                // alert(this.attacking);
            }

            if (this.game.input.keyboard.justPressed(Phaser.Keyboard.X) && !this.attacking && this.mana > 10) {
                this.playAnim('shoot', false, this.canAttack);
                var bullet = new Platformer.Bullet(this.game, this);
                this.attacking = true;
                this.mana -= 10;
            }

            //    }
            if (this.spriteBody.velocity.y > 0) {
                this.isFalling = true;
            } else {
                this.isFalling = false;
            }

            /*if (this.attackRef) {
            var that = this;
            this.attackRef.onComplete.add(function () {
            that.attacking = false;
            
            //   console.log("not attacking");
            //   alert(this.attacking);
            
            });
            }*/
            if (this.spriteBody.onFloor()) {
                this.isJumping = false;
            } else {
                this.isJumping = true;
            }

            console.log(this.spriteBody.position.x + "," + this.spriteBody.position.y);
        };

        Player.prototype.canAttack = function (that) {
            that.attacking = false;
        };

        Player.prototype.regenMana = function () {
            if (this.mana != 100) {
                this.mana++;
            }
        };

        Player.prototype.playAnim = function (key, cuttoffable, callback) {
            var ref;
            if (this.canAnim) {
                if (cuttoffable) {
                    this.animations.play(key);
                } else {
                    ref = this.animations.play(key);
                    this.canAnim = false;
                    this.allowAnimOnComplete(ref, callback);
                }
            }
        };

        Player.prototype.hud = function () {
            this.healthBar.body.x = this.spriteBody.x;
            this.healthBar.body.y = this.spriteBody.y - this.height - 15;

            this.manaBar.body.x = this.spriteBody.x;
            this.manaBar.body.y = this.spriteBody.y - this.height - 7;

            this.healthBar.scale.x = this.lives / 3;
            this.manaBar.scale.x = this.mana / 100;
        };

        Player.prototype.die = function () {
            this.game.state.start('Gameover');
        };

        Player.prototype.allowAnimOnComplete = function (ref, callback) {
            var that = this;
            ref.onComplete.add(function () {
                that.canAnim = true;
                callback(that);
            });
        };

        Player.prototype.resetAccel = function () {
            this.spriteBody.acceleration.x = 0;
        };
        return Player;
    })(Phaser.Sprite);
    Platformer.Player = Player;
})(Platformer || (Platformer = {}));
//# sourceMappingURL=Player.js.map
