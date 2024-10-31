function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const number = [1, 2, 3, 4];
const double = customMap(number, (num) => {
  num * 2;
});
