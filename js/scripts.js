const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

    // if(arr.length) {
    //     return `Семья состоит из: ${arr.join(' ')} `;
    // } else {
    //     return `Семья пуста`;
    // }

    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;

}
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

    for(let key of arr) {
        console.log(key.toLowerCase());
    }
}

standardizeStrings(favoriteCities);
