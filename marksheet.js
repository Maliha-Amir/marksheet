const totalMarks = 200;
const students = [
  {
    name: "Ali",
    scienceMarks: 90,
    englishMarks: 70,
  },
  {
    name: "Huzaifa",
    scienceMarks: 10,
    englishMarks: 40,
  },
  {
    name: "Asim",
    scienceMarks: 40,
    englishMarks: 60,
  },
];

function calculateMarks(student) {
  const total = student.scienceMarks + student.englishMarks;
  const percentage = (total / totalMarks) * 100;
  return { percentage, total };
}

// Select the container where results will be displayed
const resultsContainer = document.getElementById("results");

students.forEach(student => {
  const result = calculateMarks(student);

  // Create elements to display student information
  const studentDiv = document.createElement("div");
  studentDiv.classList.add("student");

  const nameElement = document.createElement("h3");
  nameElement.textContent = "Name: " + student.name;

  const scienceElement = document.createElement("p");
  scienceElement.textContent = "Science: " + student.scienceMarks;

  const englishElement = document.createElement("p");
  englishElement.textContent = "English: " + student.englishMarks;

  const totalMarksElement = document.createElement("p");
  totalMarksElement.textContent = "Total Marks: " + result.total;

  const percentageElement = document.createElement("p");
  percentageElement.textContent = "Percentage: " + result.percentage.toFixed(2) + "%";

  const passFailElement = document.createElement("p");
  passFailElement.textContent = result.percentage >= 40 ? "Result: PASSED" : "Result: FAILED";

  // Append all elements to the studentDiv
  studentDiv.appendChild(nameElement);
  studentDiv.appendChild(scienceElement);
  studentDiv.appendChild(englishElement);
  studentDiv.appendChild(totalMarksElement);
  studentDiv.appendChild(percentageElement);
  studentDiv.appendChild(passFailElement);

  // Append the studentDiv to the resultsContainer
  resultsContainer.appendChild(studentDiv);
});
