let slick = $(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        appendDots: $('.dots')
    })
})
let slider = $(document).ready(function(){
    $('.latest-news__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        appendDots: $('.latest-news__slider_dots'),
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 770,
                settings: {
                slidesToShow: 1
                }
        }
        ]
    })
})
