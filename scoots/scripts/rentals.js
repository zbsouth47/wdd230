const url = "data/rentals.json";
const cards = document.querySelector(".rentals");

async function getRentalData() {
  const response = await fetch(url);
  const data = await response.json();
  displayRentals(data.rentals);
}

const displayRentals = (rentals) => {
  rentals.forEach((rental) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let type = document.createElement("h4");
    let image = document.createElement("img");
    let desc = document.createElement("p");

    let makeModel = `${rental.make} ${rental.model}`;
    name.textContent = makeModel;
    type.textContent = `${rental.type}`;

    image.setAttribute("src", rental.photo);
    image.setAttribute("alt", `${makeModel} Image`);
    image.setAttribute("loading", "lazy");

    switch (rental.type) {
      case "Scooter":
        desc.textContent = `This ${rental.type} has a ${rental.engine} engine and is capable of holding ${rental.people} person[s].`;
        break;
      case "ATV":
        desc.textContent = `This ${rental.type} is capable of holding up to ${rental.people} people.`;
        break;
      case "Jeep":
        desc.textContent = `This ${rental.type}'s engine is ${rental.engine}. It can hold up to ${rental.people} people. It has ${rental.features}.`;
    }

    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(image);
    card.appendChild(desc);

    cards.appendChild(card);
  });
};

getRentalData();
