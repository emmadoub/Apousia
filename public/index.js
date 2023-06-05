document.addEventListener("DOMContentLoaded", function(event) {

  const synergatesBees = document.querySelector('.synergates-bees');
  const h2 = synergatesBees.querySelector('h2');
  const h2Width = h2.offsetWidth;
  const divWidth = synergatesBees.clientWidth;
  
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
// if (window.innerWidth < 600) {
  
// }

// document.getElementsByClassName("en").style.display='none';
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

  function showOptionsLang() {
    var contentLang = document.getElementById("dropdown-content-lang");
    if (contentLang.style.display === "block") {
      contentLang.style.display = "none";
    } else {
      contentLang.style.display = "block";
    }
  }

  // function showOptionsLang() {
  //   var content = document.getElementById("dropdown-content-lang");
  //   var caret_en = document.getElementById("caret-down-en");
  //   var caret_gr = document.getElementById("caret-down-gr");
  //   if (content.style.display === "block") {
  //     content.style.display = "none";
  //   } else {
  //     content.style.display = "block";
  //   }
  //   if (document.getElementById("dropbtn2").innerHTML==='GR'){
  //   if (caret_en.style.display === "block") {
  //     caret_en.style.display = "none";
  //   } else {
  //     caret_en.style.display = "block";
  //   }
  //   if (caret_gr.style.display === "block") {
  //     caret_gr.style.display = "none";
  //   } else {
  //     caret_gr.style.display = "block";
  //   }
  // }
  // };

  
  //   function EN_selected() {
  //   var drop = document.getElementById("dropbtn2");
  //   var drop2 = document.getElementById("en");
  //   class_el = document.getElementsByClassName("el");
  //   class_en = document.getElementsByClassName("en");
  //   if (lang==='GR'){
  //   drop.innerHTML = 'EN <i class="fa fa-caret-down" id="caret-down-en"></i>';
  //   drop2.innerHTML='GR';
  //   lang='EN';
    

  // for (let i = 0; i < class_el.length; i++) {
  //     class_el[i].style.display='none';
  // }

  // for (let i = 0; i < class_en.length; i++) {
  //   class_en[i].style.display='block';
  // }
  // }
  // else {
  //   drop.innerHTML = 'GR <i class="fa fa-caret-down" id="caret-down-en"></i>';
  //   drop2.innerHTML='EN';
  //   lang='GR';
  //   for (let i = 0; i < class_el.length; i++) {
  //     class_el[i].style.display='block';
  //   }

  // for (let i = 0; i < class_en.length; i++) {
  //   class_en[i].style.display='none';
  // }
  // }
  // }

  // ;

  var selectedLanguage = localStorage.getItem('selectedLanguage') || 'GR';

  // function getLang(){
  // var lang = localStorage.getItem('selectedLanguage') || selectedLanguage;
  // var class_el = document.getElementsByClassName("el");
  // var class_en = document.getElementsByClassName("en");
  // var drop = document.getElementById("dropbtn2");
  // var drop2 = document.getElementById("en");
  //     if (lang==='EN'){
  //       drop.innerHTML = 'EN <i class="fa fa-caret-down" id="caret-down-en"></i>';
  //       drop2.innerHTML = 'GR';
  //       for (let i = 0; i < class_el.length; i++) {
  //         class_el[i].style.display = 'none';
  //       }
    
  //       for (let i = 0; i < class_en.length; i++) {
  //         class_en[i].style.display = 'block';
  //       }
  //     }
  //     else {
  //   drop.innerHTML = 'GR <i class="fa fa-caret-down" id="caret-down-en"></i>';
  //   drop2.innerHTML = 'EN';
  //   for (let i = 0; i < class_el.length; i++) {
  //     class_el[i].style.display = 'block';
  //   }

  //   for (let i = 0; i < class_en.length; i++) {
  //     class_en[i].style.display = 'none';
  //   }
  //     }
  // }

  function getLang() {
    var lang = localStorage.getItem('selectedLanguage') || selectedLanguage;
    var class_el = document.getElementsByClassName("el");
    var class_en = document.getElementsByClassName("en");
    var class_el_marker = document.querySelectorAll(".marker.under.el"); // Target elements with classes "marker", "under", and "el"
    var class_en_marker = document.querySelectorAll(".marker.under.en"); // Target elements with classes "marker", "under", and "en"
    var drop = document.getElementById("dropbtn2");
    var drop2 = document.getElementById("en");
  
    if (lang === 'EN') {
      drop.innerHTML = 'EN <i class="fa fa-caret-down" id="caret-down-en"></i>';
      drop2.innerHTML = 'GR';
      for (let i = 0; i < class_el.length; i++) {
        class_el[i].style.display = 'none';
      }
      for (let i = 0; i < class_en.length; i++) {
        class_en[i].style.display = 'block';
      }
      for (let i = 0; i < class_el_marker.length; i++) {
        class_el_marker[i].style.display = 'none';
      }
      for (let i = 0; i < class_en_marker.length; i++) {
        class_en_marker[i].style.display = 'inline-block'; // Set display to inline-block for elements with classes "marker", "under", and "en"
      }
    } else {
      drop.innerHTML = 'GR <i class="fa fa-caret-down" id="caret-down-en"></i>';
      drop2.innerHTML = 'EN';
      for (let i = 0; i < class_el.length; i++) {
        class_el[i].style.display = 'block';
      }
      for (let i = 0; i < class_en.length; i++) {
        class_en[i].style.display = 'none';
      }
      for (let i = 0; i < class_el_marker.length; i++) {
        class_el_marker[i].style.display = 'inline-block'; // Set display to inline-block for elements with classes "marker", "under", and "el"
      }
      for (let i = 0; i < class_en_marker.length; i++) {
        class_en_marker[i].style.display = 'none';
      }
    }
  }
  
function showOptionsLang() {
  var content = document.getElementById("dropdown-content-lang");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function changeLanguage() {
  var drop = document.getElementById("dropbtn2");
  var drop2 = document.getElementById("en");
  var class_el = document.getElementsByClassName("el");
  var class_en = document.getElementsByClassName("en");
  var class_el_marker = document.querySelectorAll(".marker.under.el"); // Target elements with classes "marker", "under", and "el"
  var class_en_marker = document.querySelectorAll(".marker.under.en"); // Target elements with classes "marker", "under", and "en"

  if (selectedLanguage === 'GR') {
    drop.innerHTML = 'EN <i class="fa fa-caret-down" id="caret-down-en"></i>';
    drop2.innerHTML = 'GR';
    selectedLanguage = 'EN';

    for (let i = 0; i < class_el.length; i++) {
      class_el[i].style.display = 'none';
    }

    for (let i = 0; i < class_en.length; i++) {
      class_en[i].style.display = 'block';
    }
    for (let i = 0; i < class_el_marker.length; i++) {
      class_el_marker[i].style.display = 'none';
    }
    for (let i = 0; i < class_en_marker.length; i++) {
      class_en_marker[i].style.display = 'inline-block'; // Set display to inline-block for elements with classes "marker", "under", and "en"
    }
    
  } else {
    drop.innerHTML = 'GR <i class="fa fa-caret-down" id="caret-down-en"></i>';
    drop2.innerHTML = 'EN';
    selectedLanguage = 'GR';

    for (let i = 0; i < class_el.length; i++) {
      class_el[i].style.display = 'block';
    }

    for (let i = 0; i < class_en.length; i++) {
      class_en[i].style.display = 'none';
    }
    for (let i = 0; i < class_el_marker.length; i++) {
      class_el_marker[i].style.display = 'inline-block'; // Set display to inline-block for elements with classes "marker", "under", and "el"
    }
    for (let i = 0; i < class_en_marker.length; i++) {
      class_en_marker[i].style.display = 'none';
    }
  }
  localStorage.setItem('selectedLanguage', selectedLanguage);
}
  

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

   