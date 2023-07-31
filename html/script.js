var image = document.getElementById('image');
var mousePosition = { x: 0, y: 0 };
var scrollSpeed = 0.5;

// Track mouse movement and update mousePosition
document.addEventListener('mousemove', function(event) {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
});

// Animate the image based on mouse movement
function animateImage() {
  var imageHeight = image.offsetHeight;
  var windowHeight = window.innerHeight;
  var maxScroll = imageHeight - windowHeight;
  var scroll = (mousePosition.y / windowHeight) * maxScroll;

  image.style.transform = 'translateY(-' + scroll * scrollSpeed + 'px)';

  requestAnimationFrame(animateImage); // Request the next animation frame
}

// Start the animation
animateImage();
