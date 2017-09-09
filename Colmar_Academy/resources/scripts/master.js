// HTML:   
//<main>
//<section class="banner flex">
//<div class="flex">
//    <h1>Learn something new Everyday</h1>
//    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
//    <a href="#start">Start here</a>

$(document).ready(function() {
    $(".banner a").click(function() {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
      return false;
    });
  });