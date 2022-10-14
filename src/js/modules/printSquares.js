/*8. С помощью цикла вывести случайное количество (от 10 до 100 ) разноцветных
квадратиков на HTML страницу ( исполнять код желательно на JS ).*/

export function printSquares() {
    function random(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let randomSquaresGet = random(10, 100);

    function printSquare() {
        for (let i = 0; i < randomSquaresGet; i++) {
            let parent = document.querySelector('#squares');
            let square = document.createElement('div');
            square.setAttribute('style', `background-color: ${getRandomColor()};`);
            square.className = 'field-card';
            parent.appendChild(square);
        }
    }

    const buttonPrint = document.querySelector('.btnPrint');
    const buttonClear = document.querySelector('.btnClear');

    buttonPrint.addEventListener('click', function () {
        printSquare();
    });

    buttonClear.addEventListener('click', function () {
        for (let i = 0; i < randomSquaresGet; i++) {
            let parent = document.querySelector('.field-card');
            parent.remove();
        }
    });
}