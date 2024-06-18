function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function goBack() {
  window.history.back();
  }

  document.addEventListener("DOMContentLoaded", function() {
    const optionsDialog = document.getElementById("options");
    const contactLink = document.getElementById("contactLink");
    const closeButton = document.getElementById("closeButton");

    function showOptions() {
        optionsDialog.style.display = "block";
        document.addEventListener("click", outsideClickListener);
    }

    function callWhatsApp() {
        window.open("https://call.whatsapp.com/voice/zK7ZF8HgnP9VdDEAhpQEIZ");
    }

    function callPhone() {
        window.location.href = "tel:+447769762716";
    }

    function closeOptions() {
        optionsDialog.style.display = "none";
        document.removeEventListener("click", outsideClickListener);
    }

    function outsideClickListener(event) {
        if (!optionsDialog.contains(event.target) && event.target !== contactLink) {
            closeOptions();
        }
    }

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        showOptions();
    });

    closeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents the event from propagating to the outsideClickListener
        closeOptions();
    });

    const whatsappButton = document.getElementById("whatsappButton");
    whatsappButton.addEventListener("click", function() {
        callWhatsApp();
        closeOptions();
    });

    const phoneButton = document.getElementById("phoneButton");
    phoneButton.addEventListener("click", function() {
        callPhone();
        closeOptions();
    });
});