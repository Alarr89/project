const pers = {
    health: 400,
    armor: 100,
    sayHello() {
        console.log('Hello');
    }
};

//const John = {
//    health: 100
//};

//Object.setPrototypeOf(John, pers);

const John = Object.create(pers);

console.log(John.armor);


