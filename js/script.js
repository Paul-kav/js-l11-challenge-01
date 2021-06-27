const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// working locally
const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100"); 
    const images = await res.json();
    // console.log(images);
    selectRandomImage(images);
};



// randomly selecting the index of an image
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex);
    // grabbing a single image fromm the images Array
    const randomImage = images[randomIndex]; 
    // console.log(randomImage);
    // console.log(randomImage);
    displayImage(randomImage);
};

// displaying the Image/this will be accepting all the random image objects
const displayImage = function (randomImage){
    // accessing the author from the randomImage Object
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    // modifying DOM elments
    authorSpan.innertext = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// adding the Event
button.addEventListener("click", function() {
    getImage();
});
