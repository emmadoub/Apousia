document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft') {
      plusSlides(-1);
    } else if (event.code === 'ArrowRight') {
      plusSlides(1);
    }
  });
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
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }
  