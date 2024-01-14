let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = date.toLocaleTimeString();

let footer = `©${year} | Zach Southwick | Pocatello, Idaho, USA`;
let lastModified = `Last Modified: ${month}/${day}/${year} ${time}`;

document.getElementById("footer").textContent = footer;
document.getElementById("lastModified").textContent = lastModified;
