var BouncyDancer = function(top, left, bounceTime) {
  Dancer.call(this, top, left, bounceTime);
  Dancer.prototype.step.call(this);
  this.$node = $('<img class ="dancer" src ="./img/mario.png" width="200" height="160"></img>');
  Dancer.prototype.setPosition.call(this, top, left);

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  var margin = this.timeBetweenSteps / 20;
  var instanceStep = this.step.bind(this);
  this.$node.animate({
    'margin-top': '-' + margin + 'px',
    'height': 160
  },
  'linear',
  () => {
    this.$node.animate({
      'margin-top': margin + 'px',
      'height': 160 + margin
    }, 'linear', instanceStep);
  });
};