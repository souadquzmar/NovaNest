async function getCategories(){
    try{
        const response = await fetch("https://dummyjson.com/products/category-list");
        const result = await response.json();
        const data = result.map((ele,index)=>
            `
            <li>
            <a href="./categorie-details.html?name=${ele}">${ele}</a>
            </li>
        `
        ).join('');
        document.querySelector(".categories-list").innerHTML = data;
    } catch(err){

    }
}
getCategories();
