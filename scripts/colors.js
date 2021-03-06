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
    //create red div and have it fade in
    $('<div class= "color-cube red"></div>').hide().appendTo('.container').fadeIn('slow)');
    redClicks++;
    console.log('redClicks:', redClicks);
    //update total red paragraph
    $('#red').html('Total red: ' + redClicks);
  });// end red on click
  //Create blue div on click
  $('[data-color="blue"]').on('click', function(){
    console.log('The blue button was clicked');
    //create blue div and fade it in
    $('<div class= "color-cube blue"></div>').hide().appendTo('.container').fadeIn('slow');
    //incrament blue clicks
    blueClicks++;
    console.log('blueClicks:', blueClicks);
    //update total blue paragraph
    $('#blue').html('Total blue: ' + blueClicks);
  });// end blue on click
  //create yellow div on click
  $('[data-color="yellow"]').on('click', function(){
    console.log('The yellow button was clicked');
    //create yellow div and fade it in
    $('<div class= "color-cube yellow"></div>').hide().appendTo('.container').fadeIn('slow');
    //incrament yellow clicks
    yellowClicks++;
    console.log('yellowClicks:', yellowClicks);
    //update total yellow paragraph
    $('#yellow').html('Total yellow: ' + yellowClicks);
  });// end yellow on click
  //create green div on click
  $('[data-color="green"]').on('click', function(){
    console.log('The green button was clicked');
    //create green div and fade it in
    $('<div class= "color-cube green"></div>').hide().appendTo('.container').fadeIn('slow');
    //incrament green clicks
    greenClicks++;
    console.log('greenClicks:', greenClicks);
    //update total green paragraph
    $('#green').html('Total green: ' + greenClicks);
  });//end green on click
  //Remove Cubes and decrament total
  $('body').on('click', ".color-cube", function(){
      console.log('clicking a cube');
      //fade out and remove color block
      $(this).fadeOut('300', function(){
        $(this).remove();
        //decrament color counter
          if($(this).attr('class') == "color-cube red"){
           redClicks--;
           $('#red').html('Total red: ' + redClicks);
         }
          if($(this).attr('class') == "color-cube blue"){
           blueClicks--;
           $('#blue').html('Total blue: ' + blueClicks);
         }
          if($(this).attr('class') == "color-cube yellow"){
          yellowClicks--;
          $('#yellow').html('Total yellow: ' + yellowClicks);
          }
          if($(this).attr('class') == "color-cube green"){
          greenClicks--;
          $('#green').html('Total green: ' + greenClicks);
        }
      });//end conditionals
      });//end fade out and remove

});// end on ready
