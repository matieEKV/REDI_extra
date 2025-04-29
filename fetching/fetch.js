let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

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

// Adding an event listener which takes fetchQuote as a callback
btn.addEventListener('click', fetchQuote);

// Setting a timing function that sends a request to our server after 3 seconds
setInterval(fetchQuote, 5000);


