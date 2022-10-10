export function watchVideo() {
    const control = document.querySelector('.videoItem');
    let startStop = false;
    const wrapperVideo = document.getElementById('fon');
    let vid = document.getElementById("fon");


    control.addEventListener('click', function () {
        if (startStop == false) {
            wrapperVideo.play();
            return startStop = true;
        } else {
            wrapperVideo.pause();
            vid.ontimeupdate = function () { getTimeVideo() };
            return startStop = false;
        }
    })

    function getTimeVideo() {
        document.getElementById("demo").innerHTML = vid.currentTime.toFixed(4);
    }

    vid.onended = function () {
        vid.currentTime = 0;
        return startStop = false;
    };

    $(document).ready(function () {
        $('.videoItem').click(function (event) {
            $('.time').toggleClass('stop');
        });
    });
}