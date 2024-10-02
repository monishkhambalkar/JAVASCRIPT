const applyDiscount = new Promise(function (resolve, reject) {
  // Resolve is going to execute when the function is successful
  // Reject when the function or the task has failed
  const discount = false;

  if (discount) {
    resolve("Discount Applied");
  } else {
    reject("Discount failed...");
  }
});

applyDiscount
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });
