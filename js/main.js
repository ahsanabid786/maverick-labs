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




})(jQuery); // End of use strict



