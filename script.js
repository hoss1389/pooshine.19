let total = 0;

document.getElementById("addProductForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("productName").value;
  var price = document.getElementById("productPrice").value;
  var image = document.getElementById("productImage").value;

  var productList = document.querySelector(".product-list");

  var newProduct = document.createElement("div");
  newProduct.className = "product";
  newProduct.innerHTML = `
    <img src="${image}" alt="${name}">
    <h3>${name}</h3>
    <p>${price} تومان</p>
    <button>افزودن به سبد خرید</button>
  `;

  productList.appendChild(newProduct);

  document.getElementById("addProductForm").reset();
});

// جمع قیمت‌ها در سبد خرید
document.querySelector(".product-list").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const priceText = e.target.previousElementSibling.textContent;
    const price = parseInt(priceText.replace(/\D/g, ""));
    total += price;
    document.getElementById("total-price").textContent = `مجموع کل: ${total.toLocaleString()} تومان`;
  }
});