$(document).ready(function() {
  function checkSize() {
    //small-screen text changes

    if (window.innerWidth < 500) {
      // For mobile device (small screen)
      $(".greetings").html("Hi, I'm <span style='border-bottom:0.35rem solid #FF4756'>Michael</span>.<br><br>A curious student <br>from <span style='border-bottom:0.35rem solid #80FF80'>Montréal</span><br>passionate about <br><span data-typer-targets='design,architecture,typography,photography,cinematography,art,hiking,cooking,travelling,exploring nature,entrepreneurship' style='border-bottom:0.35rem solid #3295FF'>learning</span>.");
    } else {
      // For web (large screen)
      $(".greetings").html("Hi, I'm <span style='border-bottom:0.35rem solid #FF4756'>Michael</span>—<br>A student from <span style='border-bottom:0.35rem solid #80FF80'>Montréal</span><br>passionate about <span data-typer-targets='design,architecture,typography,photography,cinematography,art,hiking,cooking,travelling,exploring nature,entrepreneurship' style='border-bottom:0.35rem solid #3295FF'>learning</span>.");
    }
  }

  checkSize();

  $(window).resize(function() {
    checkSize();
  });
});
