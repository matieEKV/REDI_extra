let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//storing a return value from setInterval function to be used for clearing the interval when button is pressed
let intervalID = scheduleFetch();

// Setting a timing function that sends a request to our server after 5 seconds and 
// returns a intervalID that is used to clearInterval
function scheduleFetch() {
    return setInterval(fetchQuote, 5000);
}

//setting a function that calls resetInterval and fetchQuote functions when the button is clicked
function resetFetch() {
    resetInterval();
    fetchQuote();
}

//declaring a function that resets interval after button is clicked
function resetInterval() {
    clearInterval(intervalID);
    intervalID = scheduleFetch();

// Writing a fetching function that can be used in several places when needed
function fetchQuote() {  
    fetch("http://localhost:8080")
    .then(data => data.json()) //parsing string representation of JSON into javascript object, returns a promise
    .then(data => {
        quote.innerText = data.quote;
        person.innerText = data.person;
    })
    .catch((error) => {
        console.log("Could not fetch the quote", error)
    });
}
}

// Adding an event listener which takes resetFetch as a callback
btn.addEventListener('click', resetFetch);