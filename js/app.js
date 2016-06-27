$(document).ready(function(){
  var coolKey = false;
  function playSound(soundEffect){
    var hear = soundEffect;
    // coolKey = !coolKey;
    // if(coolKey){
      $(hear)[0].volume=.5;
      $(hear)[0].play();
    // }
  }

  // function keypress(keySound){
  //   var music = keySound;
  //   if(event.which == 88){
  //     playSound(music);
  //   }
  // }

  $('.ryu').mouseenter(function(){
    $('.ryu-ready').show();
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-hadouken').hide();
  })
    .mouseleave(function(){
      $('.ryu-still').show();
      $('.ryu-ready').hide();
      $('.ryu-cool').hide();
      $('.ryu-hadouken').hide();
  })
    .mousedown(function(){
      playSound('#hadouken-sound');
      $('.ryu-cool').hide();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-hadouken').show();
      // hadouken fire ball
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
      $('.ryu-still').hide();
  });

  $(document).keydown(function(event){
    // keypress('#basshead');
    if(event.which == 88){
      playSound('#basshead');
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  })
    .keyup(function(event){
      if(event.which == 88){
        $('#basshead')[0].pause();
        $('#basshead')[0].load();
        $('.ryu-still').show();
        $('.ryu-cool').hide();
      }
      // playSound('#basshead');
  });
});
