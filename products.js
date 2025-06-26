async function getProducts(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();

        const data = result.products.map((ele) =>
             `
            <div class="product">
            <img src="${ele.thumbnail}" />
            <h3>${ele.title}</h3>
            <span>$${ele.price}</span>
            <a href="product-details.html?id=${ele.id}">Show Details</a>
            </div>
            `
        ).join('');
        document.querySelector(".categorie-products").innerHTML = data;
    } catch(err){

    }
}

getProducts();