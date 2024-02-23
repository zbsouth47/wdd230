const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", function () {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  } else {
    const warn = document.createElement("li");
    warn.textContent = "You forgot to enter a chapter!";
    list.append(warn);
  }
});

function displayList(item) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  li.textContent = item;
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete");
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("chapterList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("chapterList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

// button.addEventListener("click", function () {
//   if (input.value != "") {
//     const li = document.createElement("li");
//     const deleteButton = document.createElement("button");
//     li.textContent = input.value;
//     deleteButton.textContent = "❌";
//     li.append(deleteButton);
//     list.append(li);
//     deleteButton.addEventListener("click", function () {
//       list.removeChild(li);
//       input.focus();
//     });
//     input.focus();
//     input.value = "";
//   } else {
//     const warn = document.createElement("li");
//     warn.textContent = "You forgot to enter a chapter!";
//     list.append(warn);
//   }
// });
