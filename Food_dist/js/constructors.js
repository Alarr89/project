'use strict';

const User = function(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`${this.name}`);
    };
};

let toha = new User('Antoha', 15);
let vasya = new User('Vasyok', 20);

toha.hello();
vasya.hello();

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушёл.`);
};

vasya.exit();

console.log(toha);
console.log(vasya);