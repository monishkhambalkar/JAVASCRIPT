
// 1. Using Variables for In-Memory Caching
let cache = {};

function getData(){
	if(cache[key]){
		console.log("Fetching from cache");
		return cache[key];
	}
	console.log("feching fresh data");
	let result = key + "data";
	cache[key] = result;
	return result
}

console.log(getdata("user1"));
console.log(getdata("user1"));


// 2. Using Map for Efficient Object Caching

let cacheMap = new map(key){};

function fetchData(key){
	if(cacheMap.has(key)){
		return cacheMap.get(key);
	}
	let result = key + "data";
	cacheMap.set(key, result);
	return result;
}

console.log(fetchData("user1"));
console.log(fetchData("user1"));


// 3. Caching API Responses in localStorage

function getCacheData(key){
	let cached = localStorage.getItem(key);
	return cached ? JSON.parse(cached) : null;
}

function setCachedData(key, data){
	localStorage.setItem(key, JSON.stringify(data))
}

async function fetchWithCache(url){
	let cached = getCachedData(url);
	if(cached){
		console.log("returning from cache");
		return cached;
	}

	let response = await fetch(url);
	let data = await response.json();
	setCachedData(url, data);
	return data;
}

fetchWithCache("https://jsonplaceholder.typicode.com/todos/1").then(data => console.log(data))

// 4. Using sessionStorage for Temporary Caching

function fetchDataWithSessionCache(key, value) {
    if (sessionStorage.getItem(key)) {
        console.log("Fetching from session cache");
        return JSON.parse(sessionStorage.getItem(key));
    }

    sessionStorage.setItem(key, JSON.stringify(value));
    console.log("Storing data in session cache");
    return value;
}

console.log(fetchDataWithSessionCache("user", { name: "John" }));
console.log(fetchDataWithSessionCache("user", { name: "Doe" })); // Cached result


// 6. Using HTTP Cache Headers (Cache-Control)

fetch("https://api.example.com/data",{
	headers : {"Cache-control " : "max-age=3600"}
}).then(response=>response.json())
  .then(data => console.log(data))


// 7. Using Memoization for Function Calls

function memoize(fn){
	let cache = new Map();
	return function(...args){
		let key = JSON.stringify(args);
		if(cache.has(key)){
			return cache.get(key)
		}
		let result = fn(...args);
		canche.set(key, result);
		return result;
	}	
}

function expensiveCalculation = (num) => {
	console.log("Computing...");
	return num * num;
}

const memoizedCalc = memoize(expensiveCalculation)

console.log(memoizedCalc(5));
console.log(memoizedCalc(5));