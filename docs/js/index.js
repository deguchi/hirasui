var sliderImages = document.querySelectorAll('.slider img');
var imageCount = sliderImages.length;
var count = 0;

function addAnimationClass() {
    Array.prototype.slice.call(sliderImages).map(function(sliderImage, index) {
        if (count===index) {
            sliderImage.classList.add('animation');
            setTimeout(function() {
                sliderImage.classList.remove('animation');
            }, 8000);
        }
    });
    if (count===imageCount - 1) {
        count = 0;
    } else {
        count += 1;
    }
}

setTimeout(function() {
    addAnimationClass();
    setInterval(addAnimationClass, 6000);
}, 500);