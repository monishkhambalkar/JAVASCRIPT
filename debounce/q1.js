function debounce(fn, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, args)
        }, delay)
    }
}

function serach(value){
    console.log("API call", value);
}

const debouncedSearch = debounce(serach, 500);
debouncedSearch("M");
debouncedSearch("M0");
debouncedSearch("M0N");
debouncedSearch("M0NI");
debouncedSearch("M0NS");
debouncedSearch("M0NISH");



// Production Level Debounce

function debounce(fn, delay, immediate = false){
    let timer;
    return function(...args){
        const callNow = immediate && !timer;
        clearTimeout(timer);

        timer = setTimeout(()=>{
            timer = null;
            if (!immediate) fn.apply(this,args);
        }, delay)

        if(callNow) fn.apply(this, args);

    }
}