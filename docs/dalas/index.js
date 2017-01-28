$(document).ready(function() {

  // do not send form to server
  $('#form-1').submit(function (e) {
      e.preventDefault();
  });
  
  $("input#text1").on("change keyup paste", function() {
    calculateResult();
  });

  $("input#text2").on("change keyup paste", function() {
    calculateResult();
  });
  
  $("#text1").val("1");
  $("#text2").val("3");
  calculateResult();
});


function calculateResult() {

  var value1 = $("#text1").val();
  var value2 = $("#text2").val();

  var result = String.format("{0} ({1})", value1 / value2, parseFloat(value1 / value2).toFixed(3));
  $("#result-1").text(result);
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
