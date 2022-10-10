export function slider() {
    let offset = 0;
    const sliderLine = document.querySelector('.sliderLine');

    document.querySelector('.sliderNext').addEventListener('click', function () {
        offset = offset + 256;
        if (offset > 768) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.sliderPrev').addEventListener('click', function () {
        offset = offset - 256;
        if (offset < 0) {
            offset = 768;
        }
        sliderLine.style.left = -offset + 'px';
    });
}


