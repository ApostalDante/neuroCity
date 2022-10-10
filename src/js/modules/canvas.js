export function canvas() {
    let canvas = document.getElementById('canvas'),
        circleСtx = canvas.getContext('2d'),
        triangleСtx = canvas.getContext('2d'),
        squareСtx = canvas.getContext('2d'),
        rectangleСtx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    circleСtx.fillStyle = 'yellow';
    circleСtx.arc(110, 110, 100, 0, Math.PI * 2,);
    circleСtx.fill();

    triangleСtx.strokeStyle = 'red';
    triangleСtx.lineWidth = 15;


    triangleСtx.beginPath();
    triangleСtx.moveTo(700, 30);
    triangleСtx.lineTo(625, 200);
    triangleСtx.lineTo(775, 200);
    triangleСtx.closePath();
    triangleСtx.stroke();

    squareСtx.fillStyle = 'green';
    squareСtx.fillRect(10, 390, 200, 200);

    rectangleСtx.fillStyle = 'orange';
    squareСtx.fillRect(590, 490, 200, 100);
}