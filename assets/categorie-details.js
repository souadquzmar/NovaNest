async function getDetails() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${name}`
    );
    const result = await response.json();

    const data = result.products
      .map(
        (ele) =>
          `
            <div class="product">
            <img src="${ele.thumbnail}" />
            <h3>${ele.title}</h3>
            <span>$${ele.price}</span>
            <a href="product-details.html?id=${ele.id}">Show Details</a>
            </div>
            `
      )
      .join("");
    document.querySelector(".categorie-products").innerHTML = data;
  } catch (err) {}
}

getDetails();
