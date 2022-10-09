$(".block_1 .references_1 a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$(".block_11 .fields .second").on("click", function () {
    $(".block_11 .fields .first").val('');
})

var allPanels = $('.table_of_contents .option .into').hide();
const allOptions = $('.table_of_contents .option');
allOptions.addClass('close');

$('.table_of_contents .option').click(function () {
    allPanels.slideUp();
    allOptions.removeClass('open').addClass('close');
    $(this).removeClass('close').addClass('open').children('.into').slideDown();
    return false;
});

$('.carusel').slick({
    dots: true,
    infinity: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.corusel').slick({
    dots: true,
    infinity: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '20%',
});