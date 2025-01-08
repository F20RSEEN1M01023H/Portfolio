var typed1 = new Typed(".text", {
    strings: ["Web Developer","WordPress Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// var typed2 = new Typed(".txt", {
//     strings: [],
//     // typeSpeed: 100,
//     // backSpeed: 100,
//     // backDelay: 100,
//     // loop: true,
// });
document.getElementById('showBtn').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
});
document.getElementById('showbtn').addEventListener('click', function() {
    var imageContainer = document.getElementById('textContainer');
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
});


emailjs.init("wF9YbVyULuP2YfDhZ");
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting traditionally
  
    var fullName = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email_id").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();
  
    // Validate fields
    if (!fullName || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Email.js parameters
    var params = {
      from_name: fullName,
      email_id: email,
      phone: phone,
      message: message,
    };
  
    // Sending email via Email.js
    emailjs
      .send("service_ifzbsx9", "template_6vh2f2c", params)
      .then(
        function (response) {
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset(); // Clear form fields
        },
        function (error) {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  });
  