const priceTable = document.querySelector("#prices");
const pricesURL = "data/rentals.json";

async function getRentalData() {
  const response = await fetch(pricesURL);
  const data = await response.json();
  makeTable(data.rentals);
}

const makeTable = (rentals) => {
  rentals.forEach((rental) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    if (rental.type == "Jeep") {
      td1.textContent = `${rental.make} ${rental.model} w/ ${rental.features}`;
    } else {
      td1.textContent = `${rental.make} ${rental.model} ${rental.type}`;
    }
    td2.textContent = `${rental.people} Person(s)`;
    td3.textContent = `${rental.halfDayRes}`;
    td4.textContent = `${rental.fullDayRes}`;
    td5.textContent = `${rental.halfDayWalk}`;
    td6.textContent = `${rental.fullDayWalk}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    priceTable.appendChild(tr);
  });
};

getRentalData();
