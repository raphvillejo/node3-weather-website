console.log("Client side javascript file is loaded!");

fetch("http://puzzle.mead.io/puzzle").then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const message3 = document.querySelector("#loadingmessage");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  message1.textContent = "loading...";
  message2.textContent = "";
  fetch(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      location +
      ".json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1"
  ).then((res) => {
    res.json().then((data) => {
      if (error) {
        message1.textContent = data.error;
      } else {
        message1.textContent = data.location;
        message2.textContent = data.location;
      }
    });
  });
});
