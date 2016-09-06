console.log("Colors.js is working");


$(document).ready(function(){
  console.log('JQ is loaded');
  //establish Click counters
  var redClicks =0;
  var blueClicks =0;
  var yellowClicks =0;
  var greenClicks =0;
  //Create red div on click
  $('[data-color="red"]').on('click', function(){
    console.log('The red button was clicked');
    //create red div
    var redDiv='<div class= "color-cube red"></div>';
    //append red div to the container
    $('.container').append(redDiv);
    //incrament red clicks
    redClicks++;
    console.log('redClicks:', redClicks);
    //update total red paragraph
    $('#red').html('Total red: ' + redClicks);
  });
  //Create blue div on click
  $('[data-color="blue"]').on('click', function(){
    console.log('The blue button was clicked');
  });
  //create yellow div on click
  $('[data-color="yellow"]').on('click', function(){
    console.log('The yellow button was clicked');
  });
  //create green div on click
  $('[data-color="green"]').on('click', function(){
    console.log('The green button was clicked');
  });

});
