Array.prototype.myFilter = function (callback) {
  const result = [];

  console.log(this)
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// callback = function(n){
//    return n > 2
// }

const arr = [1,2,3,4];

const res = arr.myFilter(n => n > 2);

// console.log(res);