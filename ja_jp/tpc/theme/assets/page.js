
/*$(function(){
  $('ul.navigation.accordion li.navi04').click(function(){
    $(this).find('ul').fadeIn(400);
    setTimeout(function(){
      $('ul.navigation.accordion li.navi04').addClass('active');
    },500);
  });
});

$(function(){
  $('ul.navigation.accordion li.navi07').click(function(){
    $(this).find('ul').fadeIn(400);
    setTimeout(function(){
      $('ul.navigation.accordion li.navi07').addClass('active');
    },500);
  });
});

$(function(){
  $('body').click(function(){
    if($('ul.navigation.accordion li.navi04').hasClass('active')){
      $('ul.navigation.accordion li.navi04').removeClass('active');
      $('ul.navigation.accordion li.navi04 ul.subnav').fadeOut(400);
    };
  });
});

$(function(){
  $('body').click(function(){
    if($('ul.navigation.accordion li.navi07').hasClass('active')){
      $('ul.navigation.accordion li.navi07').removeClass('active');
      $('ul.navigation.accordion li.navi07 ul.subnav').fadeOut(400);
    };
  });
});*/

$(function(){
  $('.navi07').click(function () {
    $('.navi07 ul').slideToggle();
  });
});

$(function(){
  $('.navi04').click(function () {
    $('.navi04 ul').slideToggle();
  });
});

$(document).click(function(event) { // (1)
    if (!$.contains($(".navi04")[0], event.target)) { // (2)
        $('.navi04 ul').slideUp( '2000' );
    }
});

$(document).click(function(event) { // (1)
    if (!$.contains($(".navi07")[0], event.target)) { // (2)
        $('.navi07 ul').slideUp( '2000' );
    }
});

$(function(){
  $('ul.navigation li.img_none img').mouseenter(function(){
    $(this).attr('src',$(this).attr('src').replace('.jpg','_none.jpg'));
  });
});

$(function(){
  $('ul.navigation li.img_none img').mouseleave(function(){
    $(this).attr('src',$(this).attr('src').replace('_none.jpg','.jpg'));
  });
});

$(function(){
  $('ul.navigation li img.img_come').mouseenter(function(){
    $(this).attr('src',$(this).attr('src').replace('.jpg','_come.jpg'));
  });
});

$(function(){
  $('ul.navigation li img.img_come').mouseleave(function(){
    $(this).attr('src',$(this).attr('src').replace('_come.jpg','.jpg'));
  });
});




