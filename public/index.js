document.addEventListener("DOMContentLoaded", function(event) {

  const synergatesBees = document.querySelector('.synergates-bees');
  const h2 = synergatesBees.querySelector('h2');
  const h2Width = h2.offsetWidth;
  const divWidth = synergatesBees.clientWidth;
  console.log("H2 width:" + h2Width + "div width" + divWidth)
  
  // create an observer instance
  const observer = new IntersectionObserver((entries) => {
    // check if the observed element is intersecting with the viewport
    if (entries[0].isIntersecting) {
      // add the class that triggers the animation
      synergatesBees.classList.add('animate-bees');
      // update the keyframe positions
      synergatesBees.style.setProperty('--h2-width', h2Width + 'px');
      synergatesBees.style.setProperty('--div-width', divWidth + 'px');
      // disconnect the observer after the animation starts to save resources
      observer.disconnect();
    }
  });
  
  // start observing the element
  observer.observe(synergatesBees);
  
});

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowLeft') {
    plusSlides(-1);
  } else if (event.code === 'ArrowRight') {
    plusSlides(1);
  }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function getwidth(){
    var w = window.innerWidth;
    var h = window.innerHeight;

var x = document.getElementById("width");
x.innerHTML = "Browser width: " + w + ", height: " + h + ".";
  }

 
  function showOptions() {
    var content = document.getElementById("dropdown-content");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  };

  function openModal() {
    if (window.matchMedia("(min-width: 600px)").matches) {
    document.getElementById("ModalApousia").style.display = "block";
    }
  }
  
  function closeModal() {
    document.getElementById("ModalApousia").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

   