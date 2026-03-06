Array.prototype.myMap = function(callback){
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const arr = [1,2,3];

// const result = arr.myMap(x=> x * 2);
const result = arr.map(x=> x * 2);
console.log(result)