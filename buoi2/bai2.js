const x = [9];
if (x[x.length - 1] == 9) {
  x[x.length - 1] = 1;
  x.push(0);
} else {
  x[x.length - 1]++;
}
console.log(x);
