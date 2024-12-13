const form = document.getElementById('routeForm');
const mapContainer = document.getElementById('map');

// Function to get coordinates from address using a geocoding service
async function getCoordinates(address) {
    const response = await fetch(`https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql?address=${address}`);
    const data = await response.json();
    return data; // Return coordinates from response
}

// Function to show the route on the map
function showRoute(startCoords, endCoords) {
    const map = L.map(mapContainer).setView([startCoords.lat, startCoords.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([startCoords.lat, startCoords.lng]).addTo(map).bindPopup('Start: Your Address').openPopup();
    L.marker([endCoords.lat, endCoords.lng]).addTo(map).bindPopup('End: Karaportti 2').openPopup();
}

// Handle form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const address = document.getElementById('address').value;

    try {
        // Get coordinates from address
        const startCoords = await getCoordinates(address);
        const endCoords = { lat: 60.2074, lng: 24.8082 };  // Coordinates for Karaportti 2 (example)

        showRoute(startCoords, endCoords);
    } catch (error) {
        console.error('Error fetching route:', error);
    }
});
