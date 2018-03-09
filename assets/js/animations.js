window.onunload = function() {};

$(document).ready(function() {
  $(".wrapper").css("display", "none");

  $(".wrapper").fadeIn(500);

  $(".contact-link").click(function() {
    $(this).css('opacity', 1);
  });

  $(".a").click(function(e) {
    location.href = redirect;
    e.preventDefault();
  });
});
