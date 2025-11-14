// Week 1 Portfolio: basic arithmetic
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return b === 0 ? "Infinity" : a / b; }

const nums = [20, 5];
console.log({
  a: nums[0],
  b: nums[1],
  add: add(...nums),
  sub: sub(...nums),
  mul: mul(...nums),
  div: div(...nums)
});
