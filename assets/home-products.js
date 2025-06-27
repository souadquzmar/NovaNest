async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=5");
    const result = await response.json();

    const data = result.products
      .map(
        (ele) =>
          `
            <div class="product">
            <img src="${ele.thumbnail}" class="product-img"/>
            <h3>${ele.title}</h3>
            <span>$${ele.price}</span>
            <a href="product-details.html?id=${ele.id}">Show Details</a>
            </div>
            `
      )
      .join("");
    document.querySelector(".categorie-products").innerHTML = data;
    customModal();
  } catch (err) {}
}

getProducts();

function customModal() {
  const images = Array.from(document.querySelectorAll(".product-img"));
  const modal = document.querySelector(".my-modal");
  const closeBtn = document.querySelector(".close-btn");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  let index = null;
  const modalImg = document.querySelector(".modal-img");
  images.forEach(
    (img) =>
      (img.onclick = function (e) {
        modalImg.setAttribute("src", e.target.getAttribute("src"));
        modal.classList.remove("d-none");
        index = images.indexOf(e.target);
      })
  );

  function previousImg() {
    if (index == 0) index = images.length - 1;
    else index--;
    modalImg.setAttribute("src", images[index].getAttribute("src"));
  }

  function nextImg() {
    if (index == images.length - 1) index = 0;
    else index++;
    modalImg.setAttribute("src", images[index].getAttribute("src"));
  }
  closeBtn.onclick = function () {
    modal.classList.add("d-none");
  };

  leftBtn.onclick = function () {
    previousImg();
  };

  rightBtn.onclick = function () {
    nextImg();
  };

  document.onkeydown = (e) => {
    if (e.key == "ArrowRight") {
      nextImg();
    } else if (e.key == "ArrowLeft") {
      previousImg();
    } else if (e.key == "Escape") {
      modal.classList.add("d-none");
    }
  };
}
