const images = [
    "beach-4481919_1920.jpg",
    "girl-1357485_1920.jpg",
    "little-girl-running-795505_1920.jpg",
    "santa-cruz-2287588_1920.jpg",
    "shellfish-3062011_1920.jpg",
]

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
//append는 가장 뒷부분에, prepend는 가장 첫부분에 오게 함.