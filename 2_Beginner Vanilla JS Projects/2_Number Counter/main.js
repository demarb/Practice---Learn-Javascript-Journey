const btns = document.querySelectorAll("button");
// console.log(btns);

const counterElement = document.getElementById("counter-val");
let counter = 0;

btns.forEach(function(btn){
    if (btn.id == "counter-increment"){
        btn.addEventListener("click", (e) => {
            
            console.log("POINTER EVENT DETECTED : " + e.target.id);
            console.log("Add button clicked");

            counter+=1;
            counterElement.textContent = counter;
            changeTxtColor();
        });
    } else if (btn.id == "counter-decrement"){
        btn.addEventListener("click", (e) => {
            console.log("POINTER EVENT DETECTED : " + e.target.id);
            console.log("Subtract button clicked");

            counter-=1;
            counterElement.textContent = counter;
            changeTxtColor();
        });
    } else if (btn.id == "counter-reset"){
        btn.addEventListener("click", (e) => {
            console.log("POINTER EVENT DETECTED : " + e.target.id);
            console.log("Reset button clicked");

            counter=0;
            counterElement.textContent = counter;
            changeTxtColor();
        });
    }

});

function changeTxtColor(){
    if (counter > 0){
        counterElement.style.color = "green";
    } else if (counter < 0){
        counterElement.style.color = "orange";
    } else {
        counterElement.style.color = "indigo";
    }
}