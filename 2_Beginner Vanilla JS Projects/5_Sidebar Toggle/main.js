toggleBtn = document.querySelector(".sidebar-toggle");
closeBtn = document.querySelector(".close-btn");
sidebar = document.querySelector(".sidebar");

console.log(toggleBtn);
console.log(closeBtn);
console.log(sidebar.classList);

toggleBtn.addEventListener("click", (e)=>{
    console.log("Inside action open listener");
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", (e)=> {
    console.log("Inside action close listener");
    sidebar.classList.toggle("show-sidebar");
});