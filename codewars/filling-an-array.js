const arr = N => {
    let array = [];

    for(let i = 0; i < N; i++) {
        array.push(i);
    }

    return array;
};

//const arr = n => Array(n || 0).fill().map((_, i) => i);

//const arr = n => Array.from({length: n}, (_, i) => i);

//arr = n => n ? [...Array(n).keys()] : [];


console.log(arr(5));