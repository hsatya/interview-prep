const entry = document.getElementById("entry");

entry.addEventListener("click", displayDetails);

let row = 1;

function displayDetails() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;

  if (!name || !age || !grade) {
    alert("Please fill all the boxes");
    return;
  }

  const display = document.getElementById("display");

  const newRow = display.insertRow(row);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = grade;
  row++;
}
