// Get the form element
const form = document.getElementById('searchForm');

// Add an event listener for the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevents the default form submission behavior

    // Get the query string from the input field
    const query = document.getElementById('query').value;

    // Fetch data from the TVMaze API
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
            console.log(data);  // Log the fetched data in the console
        })
        .catch(error => {
            console.error('Error:', error);  // Log any errors to the console
        });
});
