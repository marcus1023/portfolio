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


$("#flySkills").click(function (){
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});
$("#flyPortfolio").click(function (){
    $('html, body').animate({
        scrollTop: $("#folio").offset().top
    }, 1000);
});
$("#flyContact").click(function (){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});



let scrollGame = 0
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
    if(scrollTop > 3800){
      $('.home-banner-text').removeClass('tester')
      $('.home-banner-text h1').addClass('width100')
      $('.home-banner-text').addClass('home-banner-text3')
    }
});
//FLY!!




});
