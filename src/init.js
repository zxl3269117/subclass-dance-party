$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * (Math.random() * 0.3 + 0.4),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);

    // mouseover event listenter
    dancer.$node.on('mouseover', function() {
      dancer.catchMe();
    });

    // dancer interaction: two random dance will switch their places.
    if (window.dancers.length > 2) {
      var randomNum1 = Math.floor(Math.random() * (window.dancers.length - 1));
      var randomNum2 = Math.floor(Math.random() * (window.dancers.length - 1));

      var top1 = window.dancers[randomNum1].top;
      var left1 = window.dancers[randomNum1].left;
      var top2 = window.dancers[randomNum2].top;
      var left2 = window.dancers[randomNum2].left;
      window.dancers[randomNum2].$node.animate({top: top1 + 'px', left: left1 + 'px'}, 3000, 'swing');
      window.dancers[randomNum1].$node.animate({top: top2 + 'px', left: left2 + 'px'}, 3000, 'swing');

      window.dancers[randomNum1].top = top2;
      window.dancers[randomNum1].left = left2;
      window.dancers[randomNum2].top = top1;
      window.dancers[randomNum2].left = left1;

    }
  });

  $('.lineUp').on('click', function(event) {
    var divider = $("body").width() / window.dancers.length;
    for (var i = 0; i < window.dancers.length; i++) {
      var left = i * divider;
      window.dancers[i].lineUp(left);
    }
  });

});

