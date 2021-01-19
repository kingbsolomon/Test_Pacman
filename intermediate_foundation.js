function addSigma(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum  += i;
  }
  return sum;
}

function factorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
      product *= i;
    }
    return product;
}


var fibonacci_series = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fibonacci_series(8));

function returnSecondLast(arr) {
    if (arr.length == 1) {
      return null;
    }
  return arr[arr.length - 2];
}

function nthToLast(arr, n) {
    if (arr.length == 1) {
      return null;
    }
  console.log(arr[arr.length - n]);
}

