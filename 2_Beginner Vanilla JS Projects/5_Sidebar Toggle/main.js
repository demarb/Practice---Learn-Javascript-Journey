toggleBtn = document.querySelector(".toggle");
links = document.querySelector(".links");
console.log("Hello");
console.log(toggleBtn);
console.log(links);

toggleBtn.addEventListener("click", (e) => {
    console.log("TOGGLE BEFORE");
    console.log(links.classList);
    
    // if (links.classList.contains("hide-links")==true){
    //     links.classList.remove("hide-links");
    //     links.classList.add("show-links");
    // }else{
    //     links.classList.remove("show-links");
    //     links.classList.add("hide-links");
    // }

    //removing and adding can be done using toggle
    links.classList.toggle("show-links");

    console.log("TOGGLE AFTER");
    console.log(links.classList);
});