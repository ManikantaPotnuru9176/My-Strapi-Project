fetch("http://192.168.5.226:1337/api/products")
  .then((response) => response.json())
  .then((data) => {
    const contentDiv = document.getElementById("content");
    const products = data.data;

    products.forEach((product) => {
      const pid = product.attributes.PID;
      const name = product.attributes.Name;
      const price = product.attributes.Price;
      const description = product.attributes.Description;
      const image = product.attributes.ImageUrl;

      const pageElement = document.createElement("div");
      pageElement.classList.add("product");
      pageElement.innerHTML = `
            <div class="product-image">
              <img class="product-image" src="${image}" alt="Product Image">
            </div>
            <div class="product-info">
              <h2>${pid}</h2>
              <p>${name}</p>
              <p class="price">Price: $${price}</p>
              <p class="description">${description}</p>
              <button class="btn">Details</button>
            </div>
          `;

      contentDiv.appendChild(pageElement);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
