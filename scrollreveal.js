$(document).ready(function () {
  // scrollreveal effect
   
  window.sr = ScrollReveal();
  sr.reveal('.intro p', {
    duration: 2000,
    origin: 'left',
    distance: '20px'
  });
  sr.reveal('.avatar-right img', {
    duration: 2000,
    origin: 'right',
    distance: '20px',
    viewFactor: .5
  });
  sr.reveal('.intro a', {
    duration: 2000,
    origin: 'bottom',
    distance: '10px'
  });
  //about page
  sr.reveal('.aboutAvatar', {
    duration: 2000,
    origin: 'bottom',
    distance: '10px'
  });
  //portfolio page
  sr.reveal('.cardBlock', {
    duration: 2000,
    origin: 'bottom',
    distance: '10px'
  });
   


})
