var $ = require('jQuery');
var _ = require('underscore');

function Emoji(config) {
   config = config || {};
   $.extend(this, config);
   this.health = config.health || 25;
   this.image = config.image || '❓';
   this.name = config.name || 'unknown';

   this.startingHealth = this.health;
   this.power

   if(this.$healthBar instanceof $) {
      this.$healthBar = config.$healthBar;
      this.$healthBar.textContent = this.health + '/' + this.startingHealth;
   }
}

Emoji.prototype.setHealthBar = function(healthBar){
   this.$healthBar = healthBar;
   this.$healthBar.text(this.health + '/' + this.startingHealth);
}

Emoji.prototype.lowerHealth = function() {
   var hit = _.random(1,Math.min(6,this.health));

//https://github.com/daneden/animate.css <--- This stuff is super cool!---> .JC
   if(hit > 0){
      this.$healthBar.parent().prev().on('click', function(){
          $(this).addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function(){
          $(this).removeClass('animated shake')
        });
    });
 };

   this.health -= hit;
   console.log('health: ',this.health);

   // update
   if(this.$healthBar instanceof $){
      console.log('lowering health bar');
      this.$healthBar.width(this.health/this.startingHealth*100 + '%');
      this.$healthBar.text(this.health + '/' + this.startingHealth);
   }
}

Emoji.prototype.attack = function(adversary /* Emoji */){
   // TODO: use this.power as an argument to lowerHealth()
   adversary.lowerHealth();
}

// Good guys

// Emoji.prototype = new Bad();
// bad{
//
// }

// function (config){
//   attack.call(this, config);
// }
// Smiley.prototype = new Good();
// Smiley.prototype.attack = function(){
//   return 'lowerHealth';
//
// };

//Bad Guys

// place your code here


//exports!
module.exports = {
  'Emoji': Emoji
};
