
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


// CopyToClipboard Nicknames.
  function copyToClipboard(text) {
    const tempElement = document.createElement('textarea');
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    alert('Nickname copied to clipboard!');
  }
  
//