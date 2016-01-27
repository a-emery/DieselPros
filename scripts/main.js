$('.subHeaderListItem').click(function(){
  console.log('hello');
});

$('document').ready(function(){
  var images = ["./images/engine.jpeg","./images/semiTruckRepair.jpg","./images/americaTruck.png","./images/largeLogo.png"];
  var i = 0;
  var renew = setInterval(function(){
    if(images.length == i){
        i = 0;
        $('#subHeaderImg').fadeOut(300, function(){
          document.getElementById("subHeaderImg").src = images[i];
          i++;
        }).fadeIn(300);
    }
    else {
      $('#subHeaderImg').fadeOut(300, function(){
        document.getElementById("subHeaderImg").src = images[i];
        i++;
      }).fadeIn(300);
    }
  },5000);

  var cw = $('.googleMapEmbed').width();
  $('.googleMapEmbed').css({'height':cw+'px'});

  var addressHeight = $('.contactAddressWrapper').height();
  $('.contactAddressIcon').css({'height':addressHeight+'px'});
});

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    if ($('.content').css('margin-top') === '0px') {
      console.log('hello');
      $('.content').css('margin-top','180px');
      $('.hamburgerMenu').css('height','180px');
    }
    else {
      $('.content').css('margin-top','0px');
      $('.hamburgerMenu').css('height','0px');
    }
	});
});

// $('.googleMapEmbed').width();




$(window).resize(function(){
  var cw = $('.googleMapEmbed').width();
  $('.googleMapEmbed').css({'height':cw+'px'});
});
