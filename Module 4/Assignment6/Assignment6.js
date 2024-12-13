document.getElementById('jokeSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const searchTerm = document.getElementById('searchTerm').value;

    // Fetch jokes based on the search term
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const jokesContainer = document.getElementById('jokesContainer');
            jokesContainer.innerHTML = '';  // Clear previous jokes
            
            data.result.forEach(joke => {
                // Create an article for each joke
                const article = document.createElement('article');
                const jokeText = document.createElement('p');
                jokeText.textContent = joke.value;
                article.appendChild(jokeText);
                jokesContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error fetching jokes:', error));
});
