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

  // پاک کردن فرم بعد از ثبت
  document.getElementById("addProductForm").reset();
});