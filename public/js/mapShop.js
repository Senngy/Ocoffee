
window.addEventListener('load', () => {
    // Adapte la taille de lamap en fonction de la taille de la reference
        const reference = document.getElementById('reference');
        const mapStyle = document.getElementById('map');

        mapStyle.style.height = reference.offsetHeight + 'px';

        var map = L.map('map').setView([49.4304, 2.0833], 15); // Beauvais, zoom centré sur la cathédrale

        // Mapbox Streets
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   L.marker([49.4304, 2.0833]).addTo(map)
    .bindPopup('📍Venez deguster un de nos cafés ;)')
    .openPopup();
});    
