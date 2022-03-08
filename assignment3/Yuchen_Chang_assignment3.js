//Q1
const newTable = document.querySelector(".table");

const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

const tableHead = ["Student Name", "Age", "Phone", "Address"];

let table = document.createElement("table");
let tableRow = document.createElement("tr");
//Populate header row
tableHead.forEach((text) => {
  let header = document.createElement("th");
  let headerText = document.createTextNode(text);
  header.appendChild(headerText);
  tableRow.appendChild(header);
});

table.appendChild(tableRow);
//Populate table cell
tableInfo.forEach((student) => {
  let row = document.createElement("tr");

  Object.values(student).forEach((text) => {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    row.appendChild(cell);
  });
  table.appendChild(row);
});

newTable.appendChild(table);

//Q2
const orderList = document.querySelector(".orderedlist");
const unorderList = document.querySelector(".unorderedlist");

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
//Populate ordered list

list.forEach((item) => {
  let newList = document.createElement("li");
  let newListItem = document.createTextNode(item);
  newList.appendChild(newListItem);
  orderList.appendChild(newList);
});

//Populate unordered list
list.forEach((item) => {
  let newList = document.createElement("li");
  let newListItem = document.createTextNode(item);
  newList.appendChild(newListItem);
  unorderList.appendChild(newList);
});

//Q3
const newDropDownList = document.querySelector("#cities");

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

dropDownList.forEach(({ value, content }) => {
  newDropDownList.innerHTML += `<option value="${value}">${content}</option>`;
});
