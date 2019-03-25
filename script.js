
 //the correct one
var slideIndex = 0;
var t;
var s = 1;


// function navbarFunction() {
//     var x = document.getElementById("myNavbar");
//     var y = document.getElementById("iconn");
//     if (x.className === "navbar") {
//         x.className += " responsive";
//         //y.innerHTML = "&#xf2d1;";//"&#xf00d;";
//       //  openNav();
//       //  document.getElementById("slides").style.zIndex = "";
//         y.className = "fa fa-window-minimize";
//     } else {
//         x.className = "navbar";
//        // document.getElementById("slides").style.zIndex = "9";
//        // y.innerHTML = "&#9776;";
//         y.className = "fa fa-navicon";
//     }
// }


    $(document).ready(function(){
        // Add scrollspy to <body>
        $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  }  // End if
});
});

//
//function openNav() {
//    document.getElementById("myNavbar").style.width = "250px";
//}
//
//function closeNav() {
//    document.getElementById("myNavbar").style.width = "0";
//}

