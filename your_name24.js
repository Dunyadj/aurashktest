// Initialize Leaflet map
var map = L.map('nymap').setView([40.681801312931455, -73.9571896025164], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);




// Define custom marker styles for each marker
const luigisMarkerStyle = {
    backgroundColor: 'green', // Change color as needed
    borderColor: 'black', // Change border color as needed
    borderWeight: 1, // Change border weight as needed
    width: '32px', // Change width as needed
    height: '32px', // Change height as needed
    textAlign: 'center',
    lineHeight: '32px', // Adjust line height to center text vertically
    color: 'white', // Change text color as needed
};

// Add a marker to the map for New York City
var luigismarker = L.marker([40.68965691085725, -73.96537769031497]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup("<b>Luigis Pizza</b><br>Best pizza on Dekalb Ave").openPopup();

// Define custom marker styles for each marker
const luigisMarkerStyle = {
    backgroundColor: 'green', // Change color as needed
    borderColor: 'black', // Change border color as needed
    borderWeight: 1, // Change border weight as needed
    width: '32px', // Change width as needed
    height: '32px', // Change height as needed
    textAlign: 'center',
    lineHeight: '32px', // Adjust line height to center text vertically
    color: 'white', // Change text color as needed
};




// Add a marker to the map for New York City
var prattinstmarker = L.marker([40.69099831383163, -73.96332055134893]).addTo(map);

// Add a popup to the marker
prattinstmarker.bindPopup("<b>Pratt Institute</b><br>Sculpture Garden and green space").openPopup();



// Add a marker to the map for New York City
var ftgreeneparkmarker = L.marker([40.69271525220281, -73.97682542294763]).addTo(map);

// Add a popup to the marker
ftgreeneparkmarker.bindPopup("<b>Ft Greene Park</b><br>Prison Ship Martrys Monument has good views of the city.").openPopup();


// Load the GeoJSON line file
fetch('https://aurashktest.github.io/aurashktest/akdaytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });


    // Load the GeoJSON line file
fetch('https://aurashktest.github.io/aurashktest/akeveningroute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'blue', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };

    // Add the GeoJSON line to the map
    L.geoJSON(geojson, {
        style: lineStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});
