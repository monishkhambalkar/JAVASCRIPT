function fetchData(url, callback) {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      callback(null, `Data from ${url}`);
    } else {
      callback(`Error fetching ${url}`);
    }
  }, 1000);
}

function processItem(urlArray) {
  urlArray.forEach((url) => {
    fetchData(url, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  });
}

const urls = [
  "https://api.example.com/1",
  "https://api.example.com/2",
  "https://api.example.com/3",
];

processItem(urls);
