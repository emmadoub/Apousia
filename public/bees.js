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