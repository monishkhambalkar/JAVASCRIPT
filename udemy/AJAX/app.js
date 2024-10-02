document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.onload = function () {
    console.log(this.status);
    if (this.status === 200 && this.readyState === 4) {
      document.getElementById("output").innerHTML = `<h1>${this.response}</h1>`;
    }
  };
  // Send a Request
  xhr.send();
}
