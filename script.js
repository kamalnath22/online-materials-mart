const buildingMaterials  = [
    { id: 1, name: "Portland Cement", price: 400, image: "port.jpeg" },
    { id: 2, name: "Rapid-Hardening Cement", price: 450, image: "rapi.jpeg" },
    { id: 3, name: "Construction-grade Sand", price: 300, image: "construction grade.jpeg" },
    { id: 4, name: "Gravel", price: 500, image: "gravel.jpeg" },
    { id: 5, name: "Clay Bricks", price: 600, image: "clay bricks.jpeg" },
    { id: 6, name: "Ceramic Tiles", price: 700, image: "ceramic tiles.jpeg" },
    { id: 7, name: "Reinforcing Bars", price: 800, image: "tmt.jpeg" },
    { id: 8, name: "Electrical Wires", price: 250, image: "wire.jpeg" },
    { id: 9, name: "Concrete Blocks", price: 900, image: "cement.jpg" },
    { id: 10, name: "Gypsum Board", price: 450, image: "gypsum.jpg" },
    { id: 11, name: "Roofing Sheets", price: 1200, image: "roofing.jpg" },
    { id: 12, name: "PVC Pipes", price: 200, image: "pvc.jpg" },
    { id: 13, name: "Sandstone", price: 1000, image: "sand.jpg" },
    { id: 14, name: "Steel Beams", price: 2000, image: "steel.jpg" },
    { id: 15, name: "Insulation Material", price: 1500, image: "insulatipon.jpg" },
    { id: 16, name: "Safety Gear", price: 750, image: "safety.jpg" },
    // Add more products as needed
];
;

const hardwareTools = [
    { id: 1, name: "Hammer", price: 300, image: "hammer.jpeg" },
    { id: 2, name: "Screwdriver Set", price: 600, image: "scre.jpeg" },
    { id: 3, name: "Power Drill", price: 2500, image: "drill.jpeg" },
    { id: 4, name: "Saw", price: 1200, image: "saw.jpeg" },
    { id: 5, name: "Wrench Set", price: 800, image: "wrench.jpg" },
    { id: 6, name: "Tape Measure", price: 200, image: "tapemeasure.jpg" },
    { id: 7, name: "Utility Knife", price: 150, image: "utility.jpg" },
    { id: 8, name: "Level Tool", price: 350, image: "level.jpg" },
    { id: 9, name: "Pliers", price: 400, image: "pliers.jpg" },
    { id: 10, name: "Electric Sander", price: 3000, image: "electric.jpg" },
    { id: 11, name: "Nail Gun", price: 3500, image: "nail.jpg" },
    { id: 12, name: "Impact Wrench", price: 2800, image: "impact.jpg" },
    { id: 13, name: "Trowel", price: 250, image: "trowel.jpg" },
    { id: 14, name: "Chisel Set", price: 700, image: "chisel.jpg" },
    { id: 15, name: "Clamp", price: 400, image: "clamp.jpg" },
    { id: 16, name: "Socket Set", price: 900, image: "socket.jpg" },

];

const otherEssentialItems = [
    { id: 1, name: "Plumbing Adhesives", price: 200, image: "plumbing adhesives.jpeg" },
    { id: 2, name: "Construction Chemicals", price: 700, image: "chemical.jpeg" },
    { id: 3, name: "Cleaning Supplies", price: 150, image: "clean.jpeg" },
    { id: 4, name: "Safety Goggles", price: 250, image: "safety_goggles.jpg" },
    { id: 5, name: "Gloves", price: 100, image: "gloves.jpg" },
    { id: 6, name: "Dust Masks", price: 50, image: "dust.jpg" },
    { id: 7, name: "First Aid Kit", price: 800, image: "first.jpg" },
    { id: 8, name: "Extension Cords", price: 400, image: "extension.jpg" },
    { id: 9, name: "Flashlights", price: 350, image: "flashlights.jpg" },
    { id: 10, name: "Batteries", price: 200, image: "batteries.jpg" },
    { id: 11, name: "Tarpaulin Sheets", price: 600, image: "tarpaulin.jpg" },
    { id: 12, name: "Paint Supplies", price: 800, image: "paint.jpg" },
    { id: 13, name: "Toolbox", price: 900, image: "toolbox.jpg" },
    { id: 14, name: "Ladder", price: 2500, image: "ladder.jpg" },
    { id: 15, name: "Portable Generator", price: 7000, image: "generator.jpg" },
    { id: 16, name: "Fire Extinguisher", price: 1500, image: "fire.jpg" },
];

let cart = [];
let totalPrice = 0;

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ""; // Clear existing products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = [...buildingMaterials, ...hardwareTools, ...otherEssentialItems].find(p => p.id === productId);
    if (product) {
        cart.push(product);
        totalPrice += product.price;
        document.getElementById('cart-count').innerText = cart.length;
        document.getElementById('total-price').innerText = totalPrice;
        alert(`${product.name} has been added to your cart!`);
    }
}

document.getElementById('scrap-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const scrapName = document.getElementById('scrap-name').value;
    const scrapDescription = document.getElementById('scrap-description').value;
    const scrapImage = document.getElementById('scrap-image').files[0];

    if (scrapName && scrapDescription && scrapImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const message = `Scrap item "${scrapName}" has been submitted successfully!`;
            document.getElementById('message').innerText = message;
            document.getElementById('scrap-form').reset();
        };
        reader.readAsDataURL(scrapImage);
    } else {
        document.getElementById('message').innerText = "Please fill all fields.";
    }
});

document.getElementById('checkout-button')?.addEventListener('click', function() {
    if (cart.length > 0) {
        alert(`Proceeding to payment. Total amount: ₹${totalPrice}`);
        // Here you can add real payment logic using payment gateways
    } else {
        alert("Your cart is empty. Please add items before proceeding to checkout.");
    }
});

// Load products based on the current page
if (document.title === "Building Materials") {
    displayProducts(buildingMaterials);
} else if (document.title === "Hardware & Tools") {
    displayProducts(hardwareTools);
} else if (document.title === "Other Essential Items") {
    displayProducts(otherEssentialItems);
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can handle the data submission, e.g., to a server
    alert('Payment Confirmed! Thank you for your purchase.');
    
    // Optionally, redirect to a confirmation page
    // window.location.href = 'confirmation.html'; 
});
document.getElementById('scrap-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const scrapName = document.getElementById('scrap-name').value;
    const scrapDescription = document.getElementById('scrap-description').value;
    const scrapImage = document.getElementById('scrap-image').files[0];
    const scrapPrice = document.getElementById('scrap-price').value;

    if (scrapName && scrapDescription && scrapImage && scrapPrice) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Display the uploaded image, name, description, and quoted price
            document.getElementById('display-image').src = e.target.result;
            document.getElementById('display-scrap-name').innerText = scrapName;
            document.getElementById('display-scrap-description').innerText = scrapDescription;
            document.getElementById('display-scrap-price').innerText = scrapPrice;

            // Show the scrap item display section
            document.getElementById('scrap-display').style.display = 'block';

            // Reset the form
            document.getElementById('scrap-form').reset();
        };
        reader.readAsDataURL(scrapImage);
    } else {
        document.getElementById('message').innerText = "Please fill all fields.";
    }
})
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get selected payment method
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    // Redirect to the payment page with payment method and total amount
    window.location.href = `payment.html?payment=${encodeURIComponent(paymentMethod)}&total=${totalPrice}`;
})
document.querySelector('.sell-scrap-form').addEventListener('input', updatePreview);

function updatePreview() {
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemCondition = document.getElementById('itemCondition').value;
    const priceQuote = document.getElementById('priceQuote').value;
    const itemImage = document.getElementById('itemImage').files[0];

    document.getElementById('previewName').innerText = itemName;
    document.getElementById('previewDescription').innerText = itemDescription;
    document.getElementById('previewCondition').innerText = itemCondition;
    document.getElementById('previewPrice').innerText = priceQuote;

    if (itemImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('previewImage').src = e.target.result;
        };
        reader.readAsDataURL(itemImage);
    }
}
document.getElementById('sell-scrap-form').addEventListener('input', function() {
    const scrapName = document.getElementById('scrapName').value;
    const scrapCategory = document.getElementById('scrapCategory').value;
    const scrapCondition = document.getElementById('scrapCondition').value;
    const quantity = document.getElementById('quantity').value;
    const scrapDescription = document.getElementById('scrapDescription').value;
    const scrapPrice = document.getElementById('scrapPrice').value;
    const scrapImage = document.getElementById('scrapImage').files[0];

    // Update preview fields
    document.getElementById('previewName').innerText = scrapName;
    document.getElementById('previewCategory').innerText = scrapCategory;
    document.getElementById('previewCondition').innerText = scrapCondition;
    document.getElementById('previewQuantity').innerText = quantity;
    document.getElementById('previewDescription').innerText = scrapDescription;
    document.getElementById('previewPrice').innerText = scrapPrice;

    // Show image preview if an image is selected
    if (scrapImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewImage').src = e.target.result;
        };
        reader.readAsDataURL(scrapImage);
    }
});

document.getElementById('sell-scrap-form').addEventListener('input', function() {
    const scrapName = document.getElementById('scrapName').value;
    const scrapCategory = document.getElementById('scrapCategory').value;
    const scrapCondition = document.getElementById('scrapCondition').value;
    const quantity = document.getElementById('quantity').value;
    const scrapDescription = document.getElementById('scrapDescription').value;
    const scrapPrice = document.getElementById('scrapPrice').value;
    const scrapImage = document.getElementById('scrapImage').files[0];

    // Update preview fields
    document.getElementById('previewName').innerText = scrapName;
    document.getElementById('previewCategory').innerText = scrapCategory;
    document.getElementById('previewCondition').innerText = scrapCondition;
    document.getElementById('previewQuantity').innerText = quantity;
    document.getElementById('previewDescription').innerText = scrapDescription;
    document.getElementById('previewPrice').innerText = scrapPrice;

    // Show image preview if an image is selected
    if (scrapImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewImage').src = e.target.result;
        };
        reader.readAsDataURL(scrapImage);
    }
});







