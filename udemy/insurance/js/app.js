const Form = document.getElementById("request-quote");
const html = new HTMLUI();

// variable
eventListeners();
function eventListeners() {
  // Event Listener
  document.addEventListener("DOMContentLoaded", function () {
    //create options for the year
    const html = new HTMLUI();
    html.displayYears();
  });

  // when the form will submitted
  Form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Read the value from the FROM
    const make = document.getElementById("make").value;
    const year = document.getElementById("year").value;

    // Read the radio button
    const level = document.querySelector("input[name='level']:checked").value;

    //checked all the fields have something
    if (make === "" || year === "" || level === "") {
      html.displayError("All the fields are mandatory");
    } else {
      // Make the quotation
      const insurance = new Insurance(make, year, level);
      const price = insurance.calculateQuotation(insurance);
    }
  });
}

// Object

function Insurance(make, year, level) {
  this.make = make;
  this.year = year;
  this.level = level;
}
// calculate price for the current quotation
Insurance.prototype.calculateQuotation = function (insurance) {
  let price;
  const base = 2000;

  const make = insurance.make;

  switch (make) {
    case "1":
      price = base * 1.15;
      break;
    case "2":
      price = base * 1.05;
      break;
    case "3":
      price = base * 1.35;
      break;
  }
  const year = insurance.year;
  const difference = this.getYearDifference(year);

  price = price - (difference * 3 * price) / 100;

  // check the level of protection

  const level = insurance.level;

  price = this.calculateLevel(price, level);
};

Insurance.prototype.getYearDifference = function (year) {
  return new Date().getFullYear() - year;
};

Insurance.prototype.calculateLevel = function (price, level) {
  if (level === "basic") {
    price = price * 1.3;
  } else {
    price = price * 1.5;
  }
  return price;
};

function HTMLUI() {}

// Display the latest 20 years in the select
HTMLUI.prototype.displayYears = function () {
  const max = new Date().getFullYear();
  min = max - 20;

  // Generate the list with the latest 20 Years
  const selectYears = document.getElementById("year");
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYears.appendChild(option);
  }
};

HTMLUI.prototype.displayError = function (message) {
  const div = document.createElement("div");
  div.classList = "error";

  div.innerText = `${message}`;

  Form.insertBefore(div, document.querySelector(".form-group"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};
