//Нарисуйте на canvas основные геометрические фигуры

export function canvas() {


    let canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        circleСtx = canvas.getContext('2d'),
        triangleСtx = canvas.getContext('2d'),
        squareСtx = canvas.getContext('2d'),
        rectangleСtx = canvas.getContext('2d');
    let angle = 0;

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

    /*
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    */
    /*requestAnimationFrame(tick);
    
    let pTimestamp = 0;
    let angle = 0;*/
    /*
    canvas.width = 800;
    canvas.height = 600;
    
    
    
    function animation(obj) {
    const { clear, update, render } = obj;
    let pTimestamp = 0;
    
    requestAnimationFrame(tick);
    
    function tick(timestamp) {
        requestAnimationFrame(tick);
    
        const diff = timestamp - pTimestamp;
        pTimestamp = timestamp;
        const fps = 1000 / diff;
        const secondPart = diff / 1000;
    
        const params = {
            timestamp,
            pTimestamp,
            diff,
            fps,
            secondPart,
        };
        update(params);
        clear();
        render(params);
    
    }
    
    }
    
    const triangle = {
    centerX: canvas.width / 8,
    centerY: canvas.height / 6,
    radius: 100,
    angle: 0,
    angleSpped: Math.PI * 0.01,
    }
    
    
    animation({
    clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    },
    
    update() {
        triangle.angle += triangle.angleSpped;
    },
    
    render() {
        const dAngle = (Math.PI * 2) / 3;
    
        context.beginPath();
        context.moveTo(
            triangle.centerX + triangle.radius * Math.cos(triangle.angle),
            triangle.centerY + triangle.radius * Math.sin(triangle.angle)
        );
        context.lineTo(
            triangle.centerX + triangle.radius * Math.cos(triangle.angle + dAngle),
            triangle.centerY + triangle.radius * Math.sin(triangle.angle + dAngle)
        );
        context.lineTo(
            triangle.centerX + triangle.radius * Math.cos(triangle.angle + 2 * dAngle),
            triangle.centerY + triangle.radius * Math.sin(triangle.angle + 2 * dAngle)
        );
        context.closePath();
    
        context.fillStyle = 'green';
        context.fill();
    },
    })
    */
}