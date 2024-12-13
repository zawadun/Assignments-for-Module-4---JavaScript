// Fetch a random Chuck Norris joke and print it to the console
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.value);  // Print the joke to the console
    })
    .catch(error => console.error('Error fetching joke:', error));
