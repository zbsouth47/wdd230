const url = "data/members.json";
const cards = document.querySelector(".directory");

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let level = document.createElement("p");
    let link = document.createElement("a");
    let image = document.createElement("img");

    name.textContent = member.name;
    address.textContent = `Address: ${member.address}`;
    phone.textContent = `Phone: ${member.phone}`;
    level.textContent = `Membership Level: ${member.memLevel}`;

    link.setAttribute("href", member.website);
    link.textContent = `Website for ${member.name}`;

    image.setAttribute("src", member.image);
    image.setAttribute("alt", `${member.name} Image`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(link);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(level);

    cards.appendChild(card);
  });
};

getMemberData();
