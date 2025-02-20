function viewDetails() {
    alert("View details for this order.");
    // Redirect to a detailed order page or display modal
}

function initiateReturn() {
    alert("Initiate the return process.");
    // Open a return form or redirect to the return page
}


const cart = [];
const cartDropdown = document.getElementById("cart-dropdown");
const cartItemsList = document.getElementById("cart-items");
const cartCount = document.querySelector(".cart-count");

function toggleCart() {
    cartDropdown.style.display = cartDropdown.style.display === "none" || cartDropdown.style.display === "" ? "block" : "none";
}

function addToCart(itemName, itemPrice) {
    // Add item to cart array
    cart.push({ name: itemName, price: itemPrice });

    // Update cart count
    cartCount.textContent = cart.length;

    // Update cart dropdown
    updateCartDropdown();
}

function updateCartDropdown() {
    // Clear existing items
    cartItemsList.innerHTML = "";

    // Populate cart with new items
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsList.appendChild(li);
    });

    // Show empty message if no items
    if (cart.length === 0) {
        cartItemsList.innerHTML = `<li class="empty-cart">Your cart is empty!</li>`;
    }
}

function removeFromCart(index) {
    // Remove item from cart array
    cart.splice(index, 1);

    // Update cart count
    cartCount.textContent = cart.length;

    // Update cart dropdown
    updateCartDropdown();
}




document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter-form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        const emailInput = document.querySelector(".newsletter-input");
        const email = emailInput.value;
        
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
            emailInput.value = ""; // Clear input after submission
        } else {
            alert("Please enter a valid email address.");
        }
    });
});

document.querySelector('.menu-icon').addEventListener('click', () => {
    const dropdown = document.getElementById('menu-dropdown');
    dropdown.classList.toggle('show'); // Toggle the 'show' class
});



// JavaScript for handling profile page functionality
document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.getElementById("profile-image");
    const uploadImageInput = document.getElementById("upload-image");
    const saveChangesButton = document.getElementById("save-changes");

    // Handle profile picture upload
    uploadImageInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle Save Changes button
    saveChangesButton.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;

        // Example: Save data to localStorage or send to a server
        console.log("Saving changes...");
        console.log({ name, email, phone, dob });

        alert("Profile updated successfully!");
    });
});

// JavaScript for handling Setting  page functionalit
document.addEventListener("DOMContentLoaded", () => {
    const visibilityToggle = document.getElementById("visibility-toggle");
    const visibilityStatus = document.getElementById("visibility-status");
    const themeToggle = document.getElementById("theme-toggle");

    // Toggle visibility
    visibilityToggle.addEventListener("change", () => {
        visibilityStatus.textContent = visibilityToggle.checked ? "Public" : "Private";
    });

    // Theme toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = 
            document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
});
