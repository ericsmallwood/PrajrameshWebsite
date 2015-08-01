/**
 * Created by esmallwood on 7/30/2015.
 */
$('#adsAcrossSlider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 200,
    slideMargin: 120,
    moveSlides: 1,
    speed: 200,
    auto: true,
    pause: 2000,
    pager: false

});

$('#flagsSlider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 100,
    slideMargin: 120,
    moveSlides: 1,
    speed: 200,
    auto: true,
    pause: 2000

});
$('#articleSlider').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 15,
    mode: 'vertical',
    moveSlides: 1,
    speed: 200,
    auto: true,
    pause: 2000

});

$('.bx-prev').css("left", "-10%");
$('.bx-next').css("right", "-10%");

$('#searchIcon').on('click', function(){
    var searchbarSection = $('.searchbarSection');
    if(searchbarSection.hasClass('hide-section')) {
        searchbarSection.removeClass('hide-section');
    }else{
        searchbarSection.addClass('hide-section');
    }
});