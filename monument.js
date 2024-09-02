// Function to get the index from the URL
function getMonumentIndex() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('index');
}

// Fetch monument data from JSON
fetch('./monuments.json')
    .then(response => response.json())
    .then(data => {
        const monumentIndex = getMonumentIndex();
        const monument = data.find(monument => monument.index == monumentIndex);

        if (monument) {
            displayMonumentDetails(monument);
        } else {
            console.error('Monument not found');
        }
    })
    .catch(error => console.error('Error fetching monuments data:', error));

// Function to display monument details
function displayMonumentDetails(monument) {
    document.getElementById('monumentImage').src = monument.imageSrc;
    document.getElementById('monumentImage').alt = monument.name;
    document.getElementById('monumentName').textContent = monument.name;
    document.getElementById('monumentLocation').textContent = monument.location;
    document.getElementById('monumentLocation').href = monument.mapLink;
    document.getElementById('monumentDetails').textContent = monument.details;

    // Display sub-images in the gallery
    const gallery = document.getElementById('monumentGallery');
    monument.subImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = monument.name;
        gallery.appendChild(img);
    });
}
