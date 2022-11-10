// changes between colors
var PopDancer = function(top, left, colorChangingTime) {
  Dancer.call(this, top, left, colorChangingTime);
  Dancer.prototype.step.call(this);
  this.$node = $('<img class ="dancer" src ="/img/daisy.png" width="160" height="190"></img>');
  this.$node.css({border: '10px solid red', 'border-radius': '10px'});
  Dancer.prototype.setPosition.call(this, top, left);
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

var oldStep = PopDancer.prototype.step;

PopDancer.prototype.step = function() {
  oldStep.call(this);

  var randomRed1 = Math.floor(Math.random() * 255);
  var randomGreen1 = Math.floor(Math.random() * 255);
  var randomBlue1 = Math.floor(Math.random() * 255);

  var randomRed2 = Math.floor(Math.random() * 255);
  var randomGreen2 = Math.floor(Math.random() * 255);
  var randomBlue2 = Math.floor(Math.random() * 255);

  var cssColor1 = {
    'border-color': 'rgb(' + randomRed1 + ',' + randomGreen1 + ',' + randomBlue1 + ')'
  };
  this.$node.css(cssColor1);
  var cssColor2 = {
    'border-color': 'rgb(' + randomRed2 + ',' + randomGreen2 + ',' + randomBlue2 + ')'
  };
  var changeColorBack = function() {
    this.$node.css(cssColor2);
  };

  changeColorBack = changeColorBack.bind(this);
  setTimeout(changeColorBack, this.colorChangingTime / 2);
};