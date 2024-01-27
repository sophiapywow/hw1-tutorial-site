const myLastRead = document.getElementById('lastRead');

myLastRead.onclick = () => {
    document.getElementById('clickCover').style.display = "none";
    document.getElementById('rating').style.display = "block";
};

let currReadButton = document.getElementById("crButton");
let lastReadButton = document.getElementById('lrButton');
let myHeading = document.querySelector("h1");

function showCurrRead() {

    document.getElementById('currRead')
        .style.display = "block";
    document.getElementById('crButton')
        .style.display = "none";
}

currReadButton.onclick = () => {
    showCurrRead();
}

function showLastRead() {

    myLastRead.style.display = "block";
    document.getElementById('lrButton').style.display = "none";
    document.getElementById('clickCover').style.display = "block";
}

lastReadButton.onclick = () => {
    showLastRead();
}