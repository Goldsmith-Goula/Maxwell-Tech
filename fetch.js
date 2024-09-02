const monumentsContainer = document.getElementById('monuments-container');

function createMonuments(data) {
    data.forEach(monument => {
        const monumentDiv = document.createElement('div');
        monumentDiv.className = 'monument';

        const img = document.createElement('img');
        img.src = monument.imageSrc;
        img.alt = monument.name;

        img.addEventListener('click', () => {
            window.location.href = `monument.html?index=${monument.index}`;
        });

        const titleDiv = document.createElement('div');
        titleDiv.className = 'monument-title';
        titleDiv.textContent = monument.name;

        monumentDiv.appendChild(img);
        monumentDiv.appendChild(titleDiv);
        monumentsContainer.appendChild(monumentDiv);
    });
}

// Fetch data from JSON file
fetch('./monuments.json')
    .then(response => response.json())
    .then(data => {
        createMonuments(data);
    })
    .catch(error => console.error('Error fetching monuments data:', error));
