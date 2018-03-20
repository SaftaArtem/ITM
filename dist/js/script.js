var passes = 88;
function counter(){
  if (passes == 0) {
    document.getElementById('countdown').innerHTML = "Busy";
  }else {
    document.getElementById('countdown').innerHTML = passes;
    passes --;
  }

}
var countDown = setInterval('counter()', 1000);

$(document).ready(function () {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 2000);
    return false;
  });
});