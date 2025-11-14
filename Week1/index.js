// Week 1 — CN5006 lab

// -----------------------------
// Exercise 1 (two console logs)
// -----------------------------
console.log("This is my first programe");
console.log("Well come John your month salary is 500000");

// -----------------------------
// Example 2 (sum of two numbers)
// -----------------------------
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// -------------------------------------------------------------
// Prompt-based program: read name, then check number sign
// (exact flow required by the lab; uses prompt-sync)
// -------------------------------------------------------------
const prompt = require("prompt-sync")(); // IMPORTANT per lab
console.log("starting");

const name = prompt("Enter your name: ");
console.log(`Hello, ${name}`);

// program that checks if the number is positive, negative or zero
const number = parseInt(prompt("Enter a number: "));

if (number > 0) {
  console.log("The number is positive");
} else if (number == 0) {
  console.log("The number is zero");
} else {
  console.log("The number is negative");
}
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

