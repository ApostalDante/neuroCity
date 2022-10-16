import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as sliderFunctions from "./modules/slider.js";
sliderFunctions.slider();

import * as canvasFunctions from "./modules/canvas.js";
canvasFunctions.canvas();

import * as watchVideoFunctions from "./modules/video.js";
watchVideoFunctions.watchVideo();

import * as printSquaresFunctions from "./modules/printSquares.js";
printSquaresFunctions.printSquares();




/*позиционирование*/
/*Сверстать 2 блока (1-Главный, 2-Дочерний). Разместить блок 2 внутри блока 1 строго посередине*/

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

/* получение JSON данных с помощью HTTP запроса */

const requestURL = 'https://reqres.in/api/users';

function sendRequest(metod, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(metod, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send()
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

/* или */

async function doAsyncTask() {
    const result = await fetch('https://reqres.in/api/users')
        .then(response => response.json());
    console.log(result);
}
doAsyncTask();
/*---------------------*/

/*-----------------*/

if (!window.WebSocket) {
    document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

// создать подключение
const socket = new WebSocket("ws://localhost:8081");

document.forms.publish.onsubmit = function () {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    socket.send(JSON.stringify({
        name, message
    }));
    return false;
};

// обработчик входящих сообщений
socket.onmessage = function (event) {
    let incomingMessage = event.data;
    showMessage(incomingMessage);
};

// показать сообщение в div#subscribe
function showMessage(message) {
    let messageElem = document.createElement('div');
    messageElem.appendChild(document.createTextNode(message));
    let json = JSON.parse(message);
    console.log(json);
    document.getElementById('subscribe').appendChild(messageElem);
}

