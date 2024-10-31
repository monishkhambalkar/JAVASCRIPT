function makeApiRequest(url, success, failed) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status > 200 && xhr.status < 300) {
        success(xhr.responseText);
      } else {
        failed(`${xhr.status} - ${xhr.statusText}`);
      }
    }
  };
  xhr.send();
}

makeApiRequest(
  "https://api.example.com/data",
  (response) => {
    console.log("Success:", response);
  },
  (error) => {
    console.error(error);
  }
);
