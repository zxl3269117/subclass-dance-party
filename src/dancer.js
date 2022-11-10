// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class ="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
};

Dancer.prototype.step = function() {
  var step = this.step.bind(this);
  var time = this.timeBetweenSteps;
  setTimeout(step, time);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(left) {
  this.$node.animate({
    'top': '350px',
    'left': left
  }, 2000, 'swing');
  this.top = 350;
  this.left = left;
  console.log(this);
};

// mouse over event handler method. When mouseover, dancer changes to a random position
Dancer.prototype.catchMe = function(event) {
  var top = Math.floor($("body").height() * (Math.random() * 0.3 + 0.4));
  var left = Math.floor(Math.random() * $('body').width());
  var position = {
    top: top,
    left: left
  };
  this.$node.css(position);
  this.top = top;
  this.left = left;
};