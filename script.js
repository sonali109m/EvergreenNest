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
// form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Input fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        // Error fields
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let valid = true;

        // Name
        if (name.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            valid = false;
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            valid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email.";
            valid = false;
        }

        // Phone (10-15 digits)
        const phonePattern = /^[0-9]{10,15}$/;

        if (phone.value.trim() === "") {
            phoneError.textContent = "Please enter your phone number.";
            valid = false;
        } else if (!phonePattern.test(phone.value.trim())) {
            phoneError.textContent = "Phone number must contain 10-15 digits.";
            valid = false;
        }

        // Subject
        if (subject.value.trim() === "") {
            subjectError.textContent = "Please enter a subject.";
            valid = false;
        }

        // Message
        if (message.value.trim() === "") {
            messageError.textContent = "Please enter your message.";
            valid = false;
        }

        // Success
        if (valid) {

            successMessage.innerHTML = "✅ Your message has been sent successfully!";

            // Clear all fields
            contactForm.reset();

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.textContent = "";
            }, 3000);
        }

    });

}
