// js of buy now
const buttons = document.querySelectorAll(".buy-btn");

const checkout = document.getElementById("checkout");
const checkoutImage = document.getElementById("checkoutImage");
const checkoutName = document.getElementById("checkoutName");
const checkoutPrice = document.getElementById("checkoutPrice");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        checkoutImage.src = this.dataset.image;
        checkoutName.textContent = this.dataset.name;
        checkoutPrice.textContent = this.dataset.price;

        checkout.classList.remove("hidden");

        checkout.scrollIntoView({
            behavior: "smooth"
        });

    });

});

document.getElementById("confirmOrder").addEventListener("click", function () {

    const fullName = document.getElementById("fullName");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");

    if (
        fullName.value.trim() === "" ||
        address.value.trim() === "" ||
        phone.value.trim() === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    alert("🎉 Order placed successfully!");

    // Reset all input fields
    fullName.value = "";
    address.value = "";
    phone.value = "";

    // Clear selected product
    checkoutImage.removeAttribute("src");
    checkoutName.textContent = "";
    checkoutPrice.textContent = "";

    // Hide checkout
    checkout.classList.add("hidden");

    // Scroll back to the products (optional)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.getElementById("checkoutForm").reset();

});