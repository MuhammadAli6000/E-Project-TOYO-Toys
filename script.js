
document.addEventListener("DOMContentLoaded", () => {
  const productsList1 = document.getElementById("products1");
  const productsList2 = document.getElementById("products2");

  // Populate the datalists
  products.forEach((prod) => {
    console.log(`Adding product: ${prod.name}`); 
    const option1 = document.createElement("option");
    option1.value = prod.name;
    productsList1.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = prod.name;
    productsList2.appendChild(option2);
});
});


//first product details
function getProducts1(product) {
    const prod2 = document.getElementById("prod2").value;
    if (product !== prod2) {
        const selectProduct = products.find((pd) => pd.name === product);
        if (selectProduct) {
            const table = document.getElementById("table1");
            table.innerHTML = `
                <tr><td><img src="${selectProduct.src}" alt="${selectProduct.name}" class='prodImg'></td></tr>
                <tr><td>${selectProduct.name}</td></tr>
                <tr><td>${selectProduct.brand}</td></tr>
                <tr><td>$${selectProduct.price.toFixed(2)}</td></tr>
                <tr><td>Age: ${selectProduct.age}</td></tr>
            `;
        }
    } else {
        document.getElementById("prod1").value = "";
        alert("Select a Different Product");
    }
}

//second product details
function getProducts2(product) {
    const prod1 = document.getElementById("prod1").value;
    if (product !== prod1) {
        const selectProduct = products.find((pd) => pd.name === product);
        if (selectProduct) {
            const table = document.getElementById("table2");
            table.innerHTML = `
                <tr><td><img src="${selectProduct.src}" alt="${selectProduct.name}" class='prodImg'></td></tr>
                <tr><td>${selectProduct.name}</td></tr>
                <tr><td>${selectProduct.brand}</td></tr>
                <tr><td>$${selectProduct.price.toFixed(2)}</td></tr>
                <tr><td>Age: ${selectProduct.age}</td></tr>
            `;
        }
    } else {
        document.getElementById("prod2").value = "";
        alert("Select a Different Product");
    }
}
// Navbar sticky on scroll function
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
};
// For Contact Page
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

