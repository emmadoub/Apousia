
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
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


  var selectedLanguage = localStorage.getItem('selectedLanguage') || 'GR';

  function toggleElementDisplay(elements, displayValue) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = displayValue;
    }
  }

// var class_el = document.getElementsByClassName("el");
// var class_en = document.getElementsByClassName("en");
// var class_el_marker = document.querySelectorAll(".marker.under.el");
// var class_en_marker = document.querySelectorAll(".marker.under.en");

// function toggleElementDisplay(elements, displayValue) {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].style.display = displayValue;
//   }
// }

function getLang() {
  var lang = localStorage.getItem('selectedLanguage') || selectedLanguage;
  var elementsEl = document.getElementsByClassName("el");
  var elementsEn = document.getElementsByClassName("en");
  var elementsElMarker = document.querySelectorAll(".marker.under.el");
  var elementsEnMarker = document.querySelectorAll(".marker.under.en");
  var drop = document.getElementById("dropbtn2");
  var drop2 = document.getElementById("en");

  if (lang === 'EN') {
    drop.innerHTML = 'EN <i class="fa fa-caret-down" id="caret-down-en"></i>';
    drop2.innerHTML = 'GR';

    toggleElementDisplay(elementsEl, 'none');
    toggleElementDisplay(elementsEn, 'block');
    toggleElementDisplay(elementsElMarker, 'none');
    toggleElementDisplay(elementsEnMarker, 'inline-block');
  } else {
    drop.innerHTML = 'GR <i class="fa fa-caret-down" id="caret-down-en"></i>';
    drop2.innerHTML = 'EN';

    toggleElementDisplay(elementsEl, 'block');
    toggleElementDisplay(elementsEn, 'none');
    toggleElementDisplay(elementsElMarker, 'inline-block');
    toggleElementDisplay(elementsEnMarker, 'none');
  }
}

function changeLanguage() {
  var drop = document.getElementById("dropbtn2");
  var drop2 = document.getElementById("en");
  var elementsEl = document.getElementsByClassName("el");
  var elementsEn = document.getElementsByClassName("en");
  var elementsElMarker = document.querySelectorAll(".marker.under.el");
  var elementsEnMarker = document.querySelectorAll(".marker.under.en");

  if (selectedLanguage === 'GR') {
    drop.innerHTML = 'EN <i class="fa fa-caret-down" id="caret-down-en"></i>';
    drop2.innerHTML = 'GR';
    selectedLanguage = 'EN';

    toggleElementDisplay(elementsEl, 'none');
    toggleElementDisplay(elementsEn, 'block');
    toggleElementDisplay(elementsElMarker, 'none');
    toggleElementDisplay(elementsEnMarker, 'inline-block');
  } else {
    drop.innerHTML = 'GR <i class="fa fa-caret-down" id="caret-down-en"></i>';
    drop2.innerHTML = 'EN';
    selectedLanguage = 'GR';

    toggleElementDisplay(elementsEl, 'block');
    toggleElementDisplay(elementsEn, 'none');
    toggleElementDisplay(elementsElMarker, 'inline-block');
    toggleElementDisplay(elementsEnMarker, 'none');
  }
  localStorage.setItem('selectedLanguage', selectedLanguage);
}


   