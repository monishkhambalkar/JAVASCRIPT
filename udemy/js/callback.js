const countries = [
  "France",
  "Spain",
  "Portugal",
  "Australia",
  "England",
  "Ireland",
];

function newCountry(country, callback) {
  setTimeout(function () {
    // Add the new country
    countries.push(country);

    // Execute the callback
    callback();
  }, 2000);
}

// Display the countries after 1 second
function displayCountries() {
  setTimeout(function () {
    let html = "";
    countries.forEach(function (country) {
      html += `<li>${country}</li>`;
    });
    document.body.innerHTML = html;
  }, 1000);
}

// Add a new country
newCountry("Germany", displayCountries);

// Print the countries
displayCountries();
