openModalBtn = document.querySelector(".modal-btn");
closeModalBtn = document.querySelector(".modal-exit");
modal = document.querySelector(".modal-popup");

console.log(openModalBtn);
console.log(closeModalBtn);
console.log(modal.classList);

openModalBtn.addEventListener("click", (e) => {
    console.log("Open modal");
    modal.classList.toggle("hide-modal");
});

closeModalBtn.addEventListener("click", (e) => {
    console.log("Close modal");
    modal.classList.remove("hide-modal");
});