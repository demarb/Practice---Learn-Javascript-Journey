const reviews = [
    {
        id: 1,
        author: "Jessica Dowie",
        img: "assets/customer (1).jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui. Quisque efficitur nec erat vitae tempus. Curabitur id leo erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc blandit, enim quis congue varius, nisl ligula mattis erat, sed ullamcorper turpis lacus id ligula. "
    },
    {
        id: 2,
        author: "Dave Harper",
        img: "assets/customer (2).jpg",
        text: "Ut erat odio, porta eget lacus non, luctus posuere dui. Quisque efficitur nec erat vitae tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id leo erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc blandit, enim quis congue varius, nisl ligula mattis erat, sed ullamcorper turpis lacus id ligula. Fusce vel iaculis leo."
    },
    {
        id: 3,
        author: "Cameron Rowins",
        img: "assets/customer (3).jpg",
        text: "Quisque efficitur nec erat vitae tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id leo erat. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui. Nunc blandit, enim quis congue varius, nisl ligula mattis erat, sed ullamcorper turpis lacus id ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
        id: 4,
        author: "Mike Jarrettes",
        img: "assets/customer (4).jpg",
        text: "Curabitur id leo erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc blandit, enim quis congue varius, nisl ligula mattis erat, sed ullamcorper turpis lacus id ligula. Quisque efficitur nec erat vitae tempus. Ut erat odio, porta eget lacus non, luctus posuere dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo."
    }
];

const img = document.querySelector("#customer-img");
const nameElement = document.querySelector("#customer-name");
const contentElement = document.querySelector("#review-content");

const prevBtn = document.getElementById("review-prev");
const nextBtn = document.getElementById("review-next");
const randomBtn = document.getElementById("review-random");

let currentReview = 0;

//Load first review
window.addEventListener("DOMContentLoaded", (e) =>{
    console.log("HTML Loaded and Parsed");

    changeReview(currentReview);
});

prevBtn.addEventListener("click", (e) => {
    console.log("Previous Button Click");

    if (currentReview>0){
        currentReview -=1;
    } else{
        currentReview= reviews.length-1;
    }

    changeReview();
});

nextBtn.addEventListener("click", (e) => {
    console.log("Next Button Click");

    if (currentReview<reviews.length-1){
        currentReview +=1;
    } else{
        currentReview= 0;
    }

    changeReview();
    console.log("Switched review to index: "+ currentReview);
});

randomBtn.addEventListener("click", (e) => {
    console.log("Random Button Click");

    let randNum = Math.floor(Math.random() * reviews.length);
    
    while(currentReview == randNum){
        randNum = Math.floor(Math.random() * reviews.length);
    }
    currentReview =randNum;

    changeReview();
    console.log("Switched review to index: "+ currentReview);
});

function changeReview(){
    img.src = reviews[currentReview].img;
    nameElement.textContent = reviews[currentReview].author;
    contentElement.textContent = reviews[currentReview].text;
}