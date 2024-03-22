const spotlight = document.querySelector(".spotlights");
const url2 = "data/members.json";

async function getMemberData() {
  const response = await fetch(url2);
  const data = await response.json();
  let gold = false;
  let silver = false;
  let first = 25;
  while (gold != true) {
    let size = Object.keys(data.members).length;
    let option = Math.floor(Math.random() * size);
    console.log(option);
    console.log(data.members[option]);
    if (data.members[option].memLevel == "Gold") {
      first = option;
      gold = true;
      displayMember(data.members[option]);
    }
  }
  while (silver != true) {
    let size = Object.keys(data.members).length;
    let option = Math.floor(Math.random() * size);
    console.log(option);
    console.log(data.members[option]);
    if (
      (data.members[option].memLevel == "Gold" ||
        data.members[option].memLevel == "Silver") &&
      first != option
    ) {
      silver = true;
      displayMember(data.members[option]);
    }
  }
}

const displayMember = (member) => {
  let card = document.createElement("section");
  let name = document.createElement("h3");
  let link = document.createElement("a");
  let image = document.createElement("img");
  let desc = document.createElement("p");

  name.textContent = member.name;
  desc.textContent = member.description;

  link.setAttribute("href", member.website);
  link.textContent = `Website for ${member.name}`;

  image.setAttribute("src", member.image);
  image.setAttribute("alt", `${member.name} Image`);
  image.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(desc);
  card.appendChild(image);
  card.appendChild(link);

  spotlight.appendChild(card);
};

getMemberData();
