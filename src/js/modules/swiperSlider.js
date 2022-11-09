export function swiperSlider() {
    const swiper = new Swiper('.image-slider', {
        //стрелки
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: '.swiper-button-prev',
        },
        //навигация
        // буллеты, текущее положение, прогрессбор
        pagination: {
            el: '.swiper-pagination',
            //буллеты
            clickable: true,
            //динамицеские буллеты
            dynamicBullets: true,
            //кастомные буллеты
            renderBullet: function (index, className) {
                return '<span class="' + className + ' ">' + (index + 1) + '</span>'
            },
        },
        //бесконечный слайдер
        loop: true,
        //скорость переключения слайдов
        speed: 900,
    });

}

