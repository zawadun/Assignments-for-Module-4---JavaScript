// Function to fetch and display TV shows
async function fetchTVShows() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Clear old results

    try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await response.json();

        // Loop through each TV show in the data
        data.forEach(tvShow => {
            // Create the <article> element
            const article = document.createElement('article');

            // Create the <h2> element for the show name
            const name = document.createElement('h2');
            name.textContent = tvShow.show.name;

            // Create the <a> element for the show URL
            const link = document.createElement('a');
            link.href = tvShow.show.url;
            link.target = "_blank";
            link.textContent = 'More Details';

            // Create the <img> element for the show image
            const img = document.createElement('img');
            img.src = tvShow.show.image?.medium || '';  // Optional chaining for image
            img.alt = tvShow.show.name;

            // Create the <div> element for the summary
            const summary = document.createElement('div');
            summary.innerHTML = tvShow.show.summary || 'No summary available';

            // Append all elements to the article
            article.appendChild(name);
            article.appendChild(link);
            article.appendChild(img);
            article.appendChild(summary);

            // Append the article to the results container
            resultsContainer.appendChild(article);
        });

    } catch (error) {
        console.error('Error fetching TV shows:', error);
    }
}

// Call the function to fetch and display TV shows
fetchTVShows();
