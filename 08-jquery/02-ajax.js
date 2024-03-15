$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";
  /*
const app = document.querySelector('#books');
app.style.paddingLeft = 0;
const loading = document.querySelector('#loading');
*/

  const addBookToDOM = (item) => {
    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(item.authors[0]))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text(`${item.numberOfPages} pages`))
    );
  };

  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          addBookToDOM(item);
        });
      })
      .catch((error) => {
        console.log(error);
        let li = document.createElement("li");
        li.textContent = `An error occured. Please try again.`;
        app.append(li);
      })
      .finally(() => {
        app.removeChild(loading);
      });
  };

  fetchData(url);
});
