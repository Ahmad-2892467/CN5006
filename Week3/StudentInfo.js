// StudentInfo.js — local module (Exercise 3)
const dateofBirth = "12/12/1980";

const getStudentName = () => "Ahmad Morshed";          // <- put your name
const getCampusName = () => "UEL Campus";

// export functions/variable
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// export a function with a parameter
exports.Studentgrade = (marks) => {
  if (marks > 50 && marks < 70) return "B grade";
  return "A grade";
};
