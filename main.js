$('document').ready(function() {
$('.home-banner-text-wrap').css('opacity', '0')
$('.home-banner-text-wrap').css('height', '0px')


setTimeout(function(){
  $('.home-banner-text-wrap').animate({
  height: '20vh',
  opacity: '1'
}, 1100, function() {
});
}, 800);





$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    if(scrollTop > 260){
      $('.home-banner-text').addClass('tester')
      $('.home-banner-text').removeClass('home-banner-text3')
    }
    if(scrollTop < 260){
      $('.home-banner-text').removeClass('tester')
      $('.home-banner-text h1').addClass('width100')
      $('.home-banner-text').addClass('home-banner-text3')
    }
    if(scrollTop > 3900){
      $(window).scrollTop(0);
    }
    if(scrollTop < 1){
      $(window).scrollTop(3900);
    }
});
//FLY!!




});
