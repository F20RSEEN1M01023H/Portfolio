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

