let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = date.toLocaleTimeString();

let lastModified = `©${year} | Last Modified: ${month}/${day}/${year} ${time}`;

document.getElementById("lastModified").textContent = lastModified;
