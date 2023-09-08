
const name = document.querySelector("#name"),
  subject = document.querySelector("#subject"),
  email = document.querySelector("#email"),
  message = document.querySelector("#message");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  }).then((message) => alert(message));

  console.log("Here is the info", subject.value, email.value, message.value);
}

// Credits https://tobiasahlin.com/moving-letters/#7
anime
  .timeline({ loop: false })
  .add({
    targets: ".intro-title .letter",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1100,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml7",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });


  document.addEventListener("DOMContentLoaded", function () {
    const nicknameElements = document.querySelectorAll(".nickname");
  
    nicknameElements.forEach(function (element) {
      element.addEventListener("click", function () {
        const isCopied = element.getAttribute("data-copied") === "true";
        if (!isCopied) {
          const text = element.textContent.trim();
          copyToClipboard(text);
          element.setAttribute("data-copied", "true");
          element.classList.add("copied");
  
          // Toggle the copy status text to "Coppied"
          const copyStatus = element.querySelector(".copy-status");
          if (copyStatus) {
            copyStatus.textContent = "Coppied";
            copyStatus.classList.add("fade-in"); // Apply the fade-in class
          }
  
          setTimeout(() => {
            element.setAttribute("data-copied", "false");
            element.classList.remove("copied");
  
            // Reset the copy status text to "Copy" after fading in
            if (copyStatus) {
              copyStatus.textContent = "Copy";
              copyStatus.classList.remove("fade-in"); // Remove the fade-in class
            }
          }, 1500); // Reset to "Copy" after 1.5 seconds
        }
      });
    });
  });
  
  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  
  
  
  
  
  