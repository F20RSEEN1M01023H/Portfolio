var typed1 = new Typed(".text", {
    strings: ["Frontend Developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
var typed2 = new Typed(".txt", {
    strings: ["Welcome to my portfolio! I'm Muhammad Hammad Ashraf, a passionate software engineer with expertise in web development using HTML, CSS, JavaScript, Bootstrap, and Python with Django framework."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
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

