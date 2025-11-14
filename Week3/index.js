// index.js — Exercises 1–3

// Exercise 1: normal function
function EmployeeInfo(name, Salary) {
  console.log("This is my first programe");
  console.log("Wellcome " + name + " Your monthly Salary is " + Salary);
}

// Exercise 2: arrow function
const EmpSkills = (skills) => {
  console.log("Expert in " + skills);
};

// Call Exercise 1 + 2
const EmpName = "John";
const EmpSalary = 50000;
EmployeeInfo(EmpName, EmpSalary);
EmpSkills("Java");

// Exercise 3: use local modules StudentInfo + Person
const student = require("./StudentInfo");
const Person = require("./Person");

console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob); // variable — no parentheses

console.log("grade is " + student.Studentgrade(55));

const person1 = new Person("Jim", 21, "myemail@gmail.com");
console.log("using Person Module", person1.getPersonInfo());

console.log("Programe ended");

