const products = [
    {
        id: 1,
        title: "Samsung Tablet",
        category: "Tablets",
        price: 200.00,
        img: "./assets/products/product (1).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 2,
        title: "McIntosh Touch",
        category: "Laptops",
        price: 679.99,
        img: "./assets/products/product (2).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 3,
        title: "Iphone 2.5",
        category: "Smartphones",
        price: 250.00,
        img: "./assets/products/product (3).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 4,
        title: "Chromebook 360",
        category: "Laptops",
        price: 150.00,
        img: "./assets/products/product (4).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 5,
        title: "Macbook Drive",
        category: "Laptops",
        price: 901.30,
        img: "./assets/products/product (5).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 6,
        title: "Huawei Dupri",
        category: "Smartphones",
        price: 187.00,
        img: "./assets/products/product (6).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 7,
        title: "Fablet 3",
        category: "Tablets",
        price: 387.00,
        img: "./assets/products/product (7).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 8,
        title: "Samsung Prime",
        category: "Smartphones",
        price: 300.00,
        img: "./assets/products/product (8).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 9,
        title: "Iphone 21",
        category: "Smartphones",
        price: 640.00,
        img: "./assets/products/product (9).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 10,
        title: "Dell Apro",
        category: "Laptops",
        price: 499.00,
        img: "./assets/products/product (10).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 11,
        title: "Tab Maximum",
        category: "Tablets",
        price: 310.00,
        img: "./assets/products/product (11).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
    {
        id: 12,
        title: "Galaxy Tab F",
        category: "Tablets",
        price: 299.45,
        img: "./assets/products/product (12).jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel iaculis leo. Ut erat odio, porta eget lacus non, luctus posuere dui."
    },
];

const listingSection = document.querySelector(".listing");
const filterBtnSection = document.querySelector(".filter-btns");

window.addEventListener('DOMContentLoaded', ()=>{
    showFilterBtns()
    showProducts(products);
});

function showFilterBtns(){
    // Get only unique product categories
    const uniqueCategories = products.reduce((values, product)=>{
        if (!values.includes(product.category)){
            values.push(product.category);
        }
        return values
    }, ['All']);

    console.log(uniqueCategories);

    const categoryBtns = uniqueCategories.map(function(category){
        return `<button class="productFilter" data-id=${category}>${category}</button>`
    }).join('');

    filterBtnSection.innerHTML = categoryBtns;

    // Call btns after being added to innerHTML, then add event listener
    const filterBtns = document.querySelectorAll(".productFilter");
    filterBtns.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            console.log(e.currentTarget.dataset);
            const btnCategory = e.currentTarget.dataset.id;
            const productCategory = products.filter((product)=>{
                if (product.category == btnCategory){
                    return product;
                } else if(btnCategory == "All"){
                    return product;
                }
            })
            showProducts(productCategory);
        });
    });
}

function showProducts(productsArr){
    let currentProducts = productsArr.map(function(product){

        return `<article class="single-listing">
    <div class="listing-img"><img src="${product.img}" alt=""></div>
    <div class="listing-detail">
        <div class="listing-header">
            <div class="listing-title">${product.title}</div>
            <div class="listing-price">$${product.price}</div>
        </div>
        <div class="listing-description">${product.description}</div>
    </div>
</article>`        
    });

    //Join with empty string passed, converts our array like object to a string removing the comma's returned in the process
    currentProducts = currentProducts.join('');
    listingSection.innerHTML = currentProducts;
}