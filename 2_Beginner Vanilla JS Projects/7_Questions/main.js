faqExpandBtns = document.querySelectorAll(".expand-faq");
console.log(faqExpandBtns)
faqResponse = document.querySelectorAll(".faq-response");

faqExpandBtns.forEach(btn => {
    console.log(faqExpandBtns);

    btn.addEventListener("click", (e)=>{
        // Dom Traversal
        let faqSelection = e.currentTarget.parentElement.parentElement;
        expandFaq(faqSelection);
    });
})

expandFaq = (faqSelection) => {
    faqResponse.forEach(response => {
        response.parentElement.firstElementChild.lastElementChild.firstElementChild.classList.remove("btn-rotate");
        response.classList.remove("show-text");
    });
    faqSelection.firstElementChild.lastElementChild.firstElementChild.classList.add("btn-rotate");
    faqSelection.lastElementChild.classList.add("show-text");
}