
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

  var iw = $('.galleryListItemImage').width() * 0.66;
  $('.galleryListItemImage').css({'height':iw+'px'});

});

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    if ($('.content').css('margin-top') === '0px') {
      console.log('hello');
      $('.content').css('margin-top','230px');
      $('.hamburgerMenu').css('height','230px');
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

$(window).resize(function(){
  var iw = $('.galleryListItemImage').width() * 0.66;
  $('.galleryListItemImage').css({'height':iw+'px'});
});
