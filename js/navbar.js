var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (currentScrollPos > prevScrollpos) {
    document.getElementById("navbar").style.opacity = 0;
  } else {
    document.getElementById("navbar").style.opacity = 1;
  }
  prevScrollpos = currentScrollPos;
}