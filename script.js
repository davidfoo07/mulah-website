document.getElementById("loyaltyForm").onsubmit = function (e) {
    e.preventDefault();
    const countryCode = document.getElementById("countryCode").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    if (countryCode + phoneNumber === "+60173527250") {
        sessionStorage.setItem("phoneNumber", phoneNumber);
        window.location.href = "register.html";
    } else {
        alert("Invalid phone number. Please enter the correct number to check your loyalty points.");
    }
};
