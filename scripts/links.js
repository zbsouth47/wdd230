const baseURL = "https://zbsouth47.github.io/wdd230";
const linksURL = "https://zbsouth47.github.io/wdd230/data/links.json";
// const linksURL = "data/links.json";
const lessons = document.querySelector(".lessons");

async function getLinks() {
  const response = await fetch(linksURL);
  const links = await response.json();
  //   console.log(links);
  displayLinks(links);
}

// function displayLinks(weeks) {
//   lessons.appendChild(document.createElement("ul"));
//   for (i = 0; i < weeks.length; ++i) {
//     let li = document.createElement("li");
//     li.innerText = `Week ${weeks[i].lesson}`;
//     lessons.appendChild(li);
//   }
// }

function displayLinks(weeks) {
  lessons.appendChild(document.createElement("ul"));
  weeks.forEach((week) => {
    let li = document.createElement("li");
    li.textContent = `Week ${week.lesson}: `;
    week.links.forEach((link) => {
      let a = document.createElement("a");
      a.setAttribute("href", link.url);
      a.textContent = link.title;
      li.appendChild(a);
    });
    lessons.appendChild(li);
  });
}

getLinks();
