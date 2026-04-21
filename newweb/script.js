// FORM VALIDATION + INTERACTION

document.querySelector("#myForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;

    // ❌ Empty check
    if (name === "" || email === "" || password === "" || age === "" || gender === "") {
        alert("Please fill all fields!");
        e.preventDefault();
        return;
    }

    // ❌ Email check
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email!");
        e.preventDefault();
        return;
    }

    // ❌ Password check
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        e.preventDefault();
        return;
    }

    // ❌ Age check
    if (age < 10 || age > 100) {
        alert("Enter a valid age!");
        e.preventDefault();
        return;
    }

    // ✅ Success
    alert("Form submitted successfully!");
});