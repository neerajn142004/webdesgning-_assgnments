let marks;
let result;

do {
  marks = parseFloat(prompt("Enter the student's marks:"));

  if (isNaN(marks)) {
    alert("Invalid input! Please enter a valid number.");
  }
} while (isNaN(marks));

if (marks >= 75) {
  result = "Distinction";
} else if (marks >= 60) {
  result = "First Class";
} else if (marks >= 50) {
  result = "Second Class";
} else if (marks >= 35) {
  result = "Pass";
} else {
  result = "Fail";
}

console.log("Student Result: " + result);
