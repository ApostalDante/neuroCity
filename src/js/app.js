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
/*
let ws = new WebSocket('wss://bundles.office.com');

socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
    if (ws.onmessage(message)) {
        console.log(`Received: ${message}`);
    } else {
        ws.onerror(error)
        console.err(`Failed: ${error}`);
    }
});
*/

/*
const ws = require('websocket').server;
const http = require('http');

const wss = new ws.Server({ noServer: true });

function accept(req, res) {
    // все входящие запросы должны использовать websockets
    if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
        res.end();
        return;
    }

    // может быть заголовок Connection: keep-alive, Upgrade
    if (!req.headers.connection.match(/\bupgrade\b/i)) {
        res.end();
        return;
    }

    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
}

function onConnect(ws) {
    ws.on('message', function (message) {
        let name = message.match(/([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)$/gu) || "Гость";
        ws.send(`Привет с сервера, ${name}!`);

        setTimeout(() => ws.close(1000, "Пока!"), 5000);
    });
}*/
/*
if (!module.parent) {
    http.createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}*/

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(3000, function () {
    console.log((new Date()) + ' Server is listening on port 3000');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

wsServer.on('request', function (request) {
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

