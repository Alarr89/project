String.prototype.isUpperCase = function() {
    let testArray = this.split('');
    for(let i = 0; i < testArray.length; i++) {
        if(testArray[i] !== testArray[i].toUpperCase()) return false;
    }
    return true;
}

// String.prototype.isUpperCase = function() {
//     return this.toUpperCase() === this.toString();
// }

// String.prototype.isUpperCase = function () {
//     return !/[a-z]/.test(this);
// };

// String.prototype.isUpperCase = function() {
//     return this.toUpperCase() == this;
// }

//define the string prototype here
// String.prototype.isUpperCase = function(){
//     if(this.toString() == this.toUpperCase()){
//       return true;
//     } else{
//       return false;
//     }
// }

console.log('AA d AA'.isUpperCase());