// Example TV show data
const tvShows = [
    {
        name: "Breaking Bad",
        image: "https://via.placeholder.com/210x295?text=Breaking%20Bad"
    },
    {
        name: "Game of Thrones",
        image: "https://via.placeholder.com/210x295?text=Game%20of%20Thrones"
    },
    {
        name: "Unknown Show",
        image: ""  // Missing image
    }
];

// Get the container element
const container = document.getElementById('tv-show-container');

// Loop through the TV shows array and display the information
tvShows.forEach(show => {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = show.name;

    // Use a ternary operator to handle missing image
    const img = document.createElement('img');
    img.src = show.image ? show.image : 'https://via.placeholder.com/210x295?text=Not%20Found';  // Default image if missing

    const p = document.createElement('p');
    p.textContent = "Description of " + show.name;

    // Append elements to the article
    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(p);

    // Append the article to the container
    container.appendChild(article);
});
