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
    //create blue div
    var blueDiv='<div class= "color-cube blue"></div>';
    //append blue div to the container
    $('.container').append(blueDiv);
    //incrament blue clicks
    blueClicks++;
    console.log('blueClicks:', blueClicks);
    //update total blue paragraph
    $('#blue').html('Total blue: ' + blueClicks);
  });
  //create yellow div on click
  $('[data-color="yellow"]').on('click', function(){
    console.log('The yellow button was clicked');
    //create yellow div
    var yellowDiv='<div class= "color-cube yellow"></div>';
    //append yellow div to the container
    $('.container').append(yellowDiv);
    //incrament yellow clicks
    yellowClicks++;
    console.log('redClicks:', yellowClicks);
    //update total yellow paragraph
    $('#yellow').html('Total red: ' + yellowClicks);
  });
  //create green div on click
  $('[data-color="green"]').on('click', function(){
    console.log('The green button was clicked');
    //create green div
    var greenDiv='<div class= "color-cube green"></div>';
    //append red div to the container
    $('.container').append(greenDiv);
    //incrament red clicks
    greenClicks++;
    console.log('redClicks:', greenClicks);
    //update total red paragraph
    $('#green').html('Total green: ' + greenClicks);
  });

});
