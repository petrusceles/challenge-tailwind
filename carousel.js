


$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items:1,
    nav: false,
    loop: true,
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive :{
        0 : {
            items: 1
        },
        1024 : {
            items:2
        },
        1280 :{
            items: 3
        }
    }
});