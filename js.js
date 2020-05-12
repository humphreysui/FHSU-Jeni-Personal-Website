

$(window).on('load', function () {
  $('.preloader').fadeOut(1500);
  console.log('this is working.')
});


document.getElementById("menuIcon").onclick = function(){openNav()};
document.getElementById("closebtn").onclick = function(){closeNav()};

function openNav() {
  
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("main").style.marginLeft = "20%";
  
  document.getElementById("footer").style.marginLeft = "10%";
  document.getElementById("main").style.opacity = "0.7";
  document.getElementById("footer").style.opacity = "0.7";
      
}

function closeNav(){
  
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
    
  document.getElementById("footer").style.marginLeft = "0";
  document.getElementById("main").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";

}

// typed effect on h1 home page
var typed = new Typed('#typed', {
  strings: [
    'Dr. Jeni McRay'
  ],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true
});

