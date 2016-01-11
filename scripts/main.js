$('.subHeaderListItem').click(function(){
  console.log('hello');
});

$('document').ready(function(){
  console.log('ready');
  var images = ["./images/engine.jpeg","./images/semiTruckRepair.jpg","./images/murica.jpg","./images/americaTruck.png","./images/largeLogo.png"];
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
});

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
