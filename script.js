const accessKey = 'GJwISpesjDJpfyKlih0rxhv1cRESg79EwdSSZsKV2vk'; // Replace with your actual Access Key
const container = document.getElementById('background-container');

function getRandomImage() {
    // Unsplash API endpoint for a random photo
    const apiUrl = `api.unsplash.com${accessKey}&orientation=landscape`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Get the URL of the image (e.g., 'regular' or 'full' size)
            const imageUrl = data.urls.regular; 
            
            // Apply the image URL to the CSS background-image property
            container.style.backgroundImage = `url('${imageUrl}')`;
            
            // Optional: Log photographer for attribution (as per Unsplash guidelines)
            console.log(`Photo by ${data.user.name} on Unsplash`);
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
            // Optional: Set a fallback background color or image in case of failure
            container.style.backgroundColor = '#333';
        });
}

// Call the function to load a random image when the page loads
getRandomImage();

