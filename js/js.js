/* Navigation Bar Hide Animation */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    
  } else {
    document.getElementById("navbar").style.top = "-150px";
    
  }
  prevScrollpos = currentScrollPos;
}

/* Navigation Bar Hide Animation End */