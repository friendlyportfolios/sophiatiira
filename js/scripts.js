var Tabs = {

  init: function() {
    this.bindUIfunctions();
    this.pageLoadCorrectTab();
  },

  bindUIfunctions: function() {

    // Delegation
    $(document)
      .on("click", ".transformer-tabs a[href^='#']:not('.active')", function(event) {
        Tabs.changeTab(this.hash);
        event.preventDefault();
      })
      .on("click", ".transformer-tabs a.active", function(event) {
        Tabs.toggleMobileMenu(event, this);
        event.preventDefault();
      });

  },

  changeTab: function(hash) {

    var anchor = $("[href=" + hash + "]");
    var div = $(hash);

    // activate correct anchor (visually)
    anchor.addClass("active").parent().siblings().find("a").removeClass("active");

    // activate correct div (visually)
    div.addClass("active").siblings().removeClass("active");

    // update URL, no history addition
    // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
    // window.history.replaceState("", "", hash);

    // Close menu, in case mobile
    anchor.closest("ul").removeClass("open");

  },

  // If the page has a hash on load, go to that tab
  pageLoadCorrectTab: function() {
    this.changeTab(document.location.hash);
  },

  toggleMobileMenu: function(event, el) {
    $(el).closest("ul").toggleClass("open");
  }

}

Tabs.init();





jQuery(document).ready(function($){
  //open the lateral panel
  $('.cd-btn-1').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-1').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-1').on('click', function(event){
    if( $(event.target).is('.cd-panel-1') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-1').removeClass('is-visible');
      event.preventDefault();
    }
  });


  //open the lateral panel
  $('.cd-btn-2').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-2').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-2').on('click', function(event){
    if( $(event.target).is('.cd-panel-2') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-2').removeClass('is-visible');
      event.preventDefault();
    }
  });

  //open the lateral panel
  $('.cd-btn-3').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-3').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-3').on('click', function(event){
    if( $(event.target).is('.cd-panel-3') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-3').removeClass('is-visible');
      event.preventDefault();
    }
  });

  //open the lateral panel
  $('.cd-btn-4').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-4').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-4').on('click', function(event){
    if( $(event.target).is('.cd-panel-4') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-4').removeClass('is-visible');
      event.preventDefault();
    }
  });

  //open the lateral panel
  $('.cd-btn-5').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-5').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-5').on('click', function(event){
    if( $(event.target).is('.cd-panel-5') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-5').removeClass('is-visible');
      event.preventDefault();
    }
  });

  //open the lateral panel
  $('.cd-btn-6').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-6').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-6').on('click', function(event){
    if( $(event.target).is('.cd-panel-6') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-6').removeClass('is-visible');
      event.preventDefault();
    }
  });

  //open the lateral panel
  $('.cd-btn-7').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-7').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-7').on('click', function(event){
    if( $(event.target).is('.cd-panel-7') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-7').removeClass('is-visible');
      event.preventDefault();
    }
  });

  //open the lateral panel
  $('.cd-btn-8').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-8').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-8').on('click', function(event){
    if( $(event.target).is('.cd-panel-8') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-8').removeClass('is-visible');
      event.preventDefault();
    }
  });

  //open the lateral panel
  $('.cd-btn-9').on('click', function(event){
    event.preventDefault();
    $('.cd-panel-9').addClass('is-visible');
  });
  //close the lateral panel
  $('.cd-panel-9').on('click', function(event){
    if( $(event.target).is('.cd-panel-9') || $(event.target).is('.cd-panel-close') ) { 
      $('.cd-panel-9').removeClass('is-visible');
      event.preventDefault();
    }
  });
});







// Smooth scroll for in page links - http://wibblystuff.blogspot.in/2014/04/in-page-smooth-scroll-using-css3.html
// Improvements from - http://codepen.io/kayhadrin/pen/KbalA

$(function() {
  var $window = $(window), $document = $(document),
    transitionSupported = typeof document.body.style.transitionProperty === "string", // detect CSS transition support
    scrollTime = 1; // scroll time in seconds

  $(document).on("click", "a[href*=#]:not([href=#])", function(e) {
    var target, avail, scroll, deltaScroll;
    
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

      if (target.length) {
        avail = $document.height() - $window.height();

        if (avail > 0) {
          scroll = target.offset().top;
          
          if (scroll > avail) {
            scroll = avail;
          }
        } else {
          scroll = 0;
        }

        deltaScroll = $window.scrollTop() - scroll;

        // if we don't have to scroll because we're already at the right scrolling level,
        if (!deltaScroll) {
          return; // do nothing
        }

        e.preventDefault();
        
        if (transitionSupported) {
          $("html").css({
            "margin-top": deltaScroll + "px",
            "transition": scrollTime + "s ease-in-out"
          }).data("transitioning", scroll);
        } else {
          $("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
          .animate({
            scrollTop: scroll + "px"
          }, scrollTime * 1000);
          
          return;
        }
      }
    }
  });

  if (transitionSupported) {
    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
      var $this = $(this),
        scroll = $this.data("transitioning");
      
      if (e.target === e.currentTarget && scroll) {
        $this.removeAttr("style").removeData("transitioning");
        
        $("html, body").scrollTop(scroll);
      }
    });
  }
});




$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});