// Get references to the form and the input field
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

// Add an event listener to handle the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    const query = input.value;  // Get the value entered by the user

    // Use the fetch API to send a request to the TVMaze API
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            // Log the data (search results) to the console
            console.log(data);

            // Optionally, you can also display the results on the page (not required)
            // Displaying results would involve iterating over the data and creating HTML elements dynamically.
        })
        .catch(error => {
            console.error('Error:', error);  // Handle any errors that occur during the fetch
        });

    input.value = '';  // Clear the input field after submission
});
