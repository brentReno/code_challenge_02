console.log("Colors.js is working");
////////Global Variables\\\\\\\\\\\\\\
var redClicks =0;
var blueClicks =0;
var yellowClicks =0;
var greenClicks =0;
$(document).ready(function(){
  console.log('JQ is loaded');
  //Create red div on click
  $('[data-color="red"]').on('click', function(){
    console.log('The red button was clicked');
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
