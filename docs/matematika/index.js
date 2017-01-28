$(document).ready(function() {

  $('#form-1').submit(function (e) {
      e.preventDefault();
      // window.history.back();
  });
  
  $("button#button-new-1").click(function() {
    generate();
  });

  $("button#button-results-1").click(function() {
    showResult();
  });
  
  generate();
});


function generate() {
  hideResult();

  var x = getRandomNumber(1, 10);
  var y = getRandomNumber(1, 10);

  $("#text1").val(getRandomEquition(x, y));
  $("#text2").val(getRandomEquition(x, y));

  var result = String.format("x = {0}, y = {1}", x, y);
  $("#result-1").text(result);
}


function getRandomNumber (minValue, maxValue) {
  return Math.round(minValue + (maxValue - minValue) * Math.random());
}


function getRandomEquition (x, y) {
  var mulX = getRandomNumber(1, 10);
  var mulY = getRandomNumber(1, 10);
  var result = mulX * x + mulY * y;

  return String.format("{0}x + {1}y = {2}", mulX, mulY, result);
}


function showResult() {
  $("#result-1").show();
}


function hideResult() {
  $("#result-1").hide();
}


String.format = function() {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];
    
    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }
    
    return theString;
}
