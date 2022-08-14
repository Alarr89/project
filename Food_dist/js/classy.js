'use strict';

// концепция
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, color, text) {
        super(height, width);
        this.color = color;
        this.text = text;
    }
}

let opa = new ColoredRectangleWithText(20,30,'red','text');

console.log(opa);

//єкземпляры
// const square = new Rectangle(10, 20);
// console.log(square.calcArea());