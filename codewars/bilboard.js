function billboard(name, price = 30){
    let result = 0;
    for(let i = 0; i < name.length; i++) {
        result += price;
    }
    return result;
}


console.log(billboard('123'));


//const billboard = (name, price = 30) => +(name.length / (1 / price))

//const billboard = (n, p = 30) => n.length/(1/p);

//const billboard = (name, price = 30) =>
//[...name].reduce(pre => pre + price, 0);

// function billboard(name, price = 30){
//     return name.repeat(price).length;
// } 