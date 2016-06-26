$(document).ready(function(){
  function playHadouken(){
    $('#hadouken-sound')[0].volume=.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

  $('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
    .mouseleave(function(){
      $('.ryu-still').show();
      $('.ryu-ready').hide();
  })
    .mousedown(function(){
      playHadouken();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-hadouken').show();
      $('.hadouken').show().animate({
        // backgroundPositionX: "90px"
        'left': '1020px'
        },
        function(){
          $(this).hide();
          $(this).css('left','520px');
        }
      );
  })
    .mouseup(function(){
      $('.ryu-ready').show();
      $('.ryu-hadouken').hide();
      // $('.hadouken').hide();
  })
    .keydown(function(event){
      $(".keypress").html("Key: " + event.which);
    });
});
