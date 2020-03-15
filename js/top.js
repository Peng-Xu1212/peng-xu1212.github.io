
function myTop() {
  var body = document.body; // For Safari
  var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers

  body.scrollTop = 0;
  html.scrollTop = 0;
}
