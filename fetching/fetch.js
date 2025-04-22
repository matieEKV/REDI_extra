let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');

btn.addEventListener('click', function() {
    fetch("http://localhost:8080")
    .then(data => data.json())
    .then(data => {
        quote.innerText = data.data
    })
    .catch((error) => {
        console.log("Could not fetch the quote", error)
    });
})


