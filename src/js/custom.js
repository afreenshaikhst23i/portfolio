//BACK TO TOP BUTTON JS STARTS HERE
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//BACK TO TOP BUTTON JS ENDS HERE


// PROJECTS TINY SLIDER JS STARTS HERE
let projSlider = document.querySelector(".projects-slider");
if(projSlider) {
    var slider = tns({
        container: projSlider,
        items: 1,
        loop: true,
		gutter: 30,
        autoplay: false,
        nav: true,
		mouseDrag: true,
        controls: false,
        autoplayButtonOutput: false,
        navPosition: "bottom",
		speed: 1000
    });
}
// PROJECTS TINY SLIDER JS ENDS HERE