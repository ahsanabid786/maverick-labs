(function($) {
  "use strict"; // Start of use strict

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#show-top").addClass( "show-top" );
    }
    else {
      $("#show-top").removeClass( "show-top" );    
    }
  });

  var current_width = $(window).width();

  
    $(".dropdown-toggle").removeAttr('data-toggle');
  


  // menu sticky
  $(window).on("scroll", function () {
    if(current_width > 992){
      
      $(".navbar-collapse").addClass( "show" );

      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky" );
      }
      else {
        $("header").removeClass( "sticky" );     
      }
    }
    else{
      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky-mobile" );
      }
      else {
        $("header").removeClass( "sticky-mobile" );     
      }
    }
  });


  $( document ).ready(function() {
    if(current_width > 992){
        
      $(".navbar-collapse").addClass( "push-right" );
    }
    else{
      
      $(".navbar-collapse").removeClass( "push-right" );
    }
  });
  

  $(".list-toggle").click(function(event) {
    event.preventDefault();
    $(this).next("ul.inner").slideToggle();
    
  });


    // dropdown responsive
    if(current_width < 1100){
      $(".dropdown .icon").click(function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
  
        $(this).next().toggle();
        
      });
    }

  



  document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;

    const links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      const linkPath = link.getAttribute("href");
      if (currentLocation.includes(linkPath) && linkPath !== "/") {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });



  var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','), 
            typer =  document.querySelector("span[words]"), 
            typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 90), 
            typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 900);
    
      var currentWordIndex = 0, currentCharacterIndex = 0; 

      function type(){

          var wordToType = wordsToType[currentWordIndex%wordsToType.length];

          if(currentCharacterIndex < wordToType.length){
              typer.innerHTML += wordToType[currentCharacterIndex++];
              setTimeout(type, typingSpeed);
          }else{

              setTimeout(erase, typingDelay);
          }}


function erase(){
    var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
    if(currentCharacterIndex >0){
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
        setTimeout(erase, typingSpeed);
    }else{

        currentWordIndex++; 
        setTimeout(type, typingDelay);
    }

}

window.onload = function(){
    type(); 
}


document.addEventListener("DOMContentLoaded", function() {
  // Show the loader for 4 seconds
  setTimeout(function() {
      hideLoader();
  }, 1000);
});

function hideLoader() {
  // Add a class to the loader container to hide it
  document.querySelector('.loader').classList.add('loader-hidden');
}


})(jQuery); // End of use strict



