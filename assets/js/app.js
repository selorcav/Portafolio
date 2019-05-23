// PARALLAX
window.addEventListener('scroll', () => {
  let parent =  document.getElementById('parallax-container');
  let children = parent.getElementsByTagName('div');
  for(let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
  }
}, false)




// OPACITYLOGO
$(document).ready(function(){
	$(".main-menu").hover(function() {    
		$(".navbar-brand").toggleClass("transparency1");
	});  
// SCROLLTOID#
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});  

// portfolio hover

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


//BAR PERCENTAGES

$('.bar-percentage[data-percentage]').each(function () {
  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));
  $({countNum: 0}).animate({countNum: percentage}, {
    duration: 6000,
    easing:'linear',
    step: function() {
      // What todo on every count
      var pct = Math.floor(this.countNum) + '%';
      progress.text(pct) && progress.siblings().children().css('width',pct);
    }
  });
});         


// MAINTEXT
var typing = ' ';
var i = 0;
(function type() {
  if(i < str.length){
    typing = typing+str.charAt(i);
    $('#type').text(typing+'_');
  }else{
    $('#type').text(typing);
    return false;
  }
  var ran = Math.floor(Math.random() * 150) + 20;//this gives a random delay between each character so it feels more realistic
  //set ran to a fixed number if you want consistent speed.
  setTimeout(function(){
    type();
  }, ran)
  i++;
}());

});


// GALLERY IMAGE
$('.thumbnail').on('click', function() {
  var clicked = $(this);
  var newSelection = clicked.data('big');
  var $img = $('.primary').css("background-image","url(" + newSelection + ")");
  clicked.parent().find('.thumbnail').removeClass('selected');
  clicked.addClass('selected');
  $('.primary').empty().append($img.hide().fadeIn('slow'));
});

// AOS
AOS.init();