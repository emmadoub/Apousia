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