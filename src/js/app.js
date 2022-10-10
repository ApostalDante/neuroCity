import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as sliderFunctions from "./modules/slider.js";
sliderFunctions.slider();

import * as canvasFunctions from "./modules/canvas.js";
canvasFunctions.canvas();

import * as watchVideoFunctions from "./modules/video.js";
watchVideoFunctions.watchVideo();


/*позиционирование*/

let block = document.getElementById('js');
let block2 = document.getElementById('jsB2');
block.style.border = '1px solid #000';
block.style.margin = 'auto';
block.style.width = "64rem";
block.style.height = '20rem';
block.style.display = 'flex';
block.style["flex-direction"] = 'column';
block.style["align-items"] = 'center';
block.style["justify-content"] = 'center';

block2.style.width = '16rem';
block2.style.height = '10rem';
block2.style.border = '1px solid #000';

/*выпадающее меню*/

$(document).ready(function () {
    $('.button__open').click(function (event) {
        $('.button__open,.buttonElem1,.buttonElem2,.buttonElem3').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


/*JSON */

async function doAsyncTask() {
    const result = await fetch('https://reqres.in/api/users')
        .then(response => response.json());
    console.log(result);
}
doAsyncTask();