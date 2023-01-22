module.exports = function reverse (n) {
  n = Math.abs(n);
let newint = n
.toString()
.split('')
.reverse()
.join('');
return newint;
}
