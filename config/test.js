function fib(n, ...arr) {
  const length = arr.length;

  if (n <= length) {
    return arr.slice(0, n);
  }

  for (let i = 0; i < n - length; i++) {
    const subArray = [...arr].reverse().slice(0, length);
    const sum = subArray.reduce((a, b) => a + b, 0);
    arr.push(sum);
  }

  return arr;
}

console.log(fib(2, 1, 0));
console.log(fib(1, 1, 0));
console.log(fib(5, 1, 1, 1, 1));
