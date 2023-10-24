const insertNumber = (ch) => {
  var existsNumber = $("#result").val();
  var lastCharacter = existsNumber.slice(-1);

  if (
    (lastCharacter == "+" ||
      lastCharacter == "-" ||
      lastCharacter == "*" ||
      lastCharacter == "/" ||
      lastCharacter == ".") &&
    (ch == "+" || ch == "-" || ch == "*" || ch == "/" || ch == ".")
  ) {
    if (lastCharacter == ch) {
      $("#result").val(existsNumber);
    } else {
      if (
        lastCharacter == "." &&
        (ch == "+" || ch == "-" || ch == "*" || ch == "/")
      ) {
        $("#result").val(existsNumber + ch);
      } else if (ch == ".") {
        // if (existsNumber.includes(".")) {
        //   alert(ch);
        // }

        $("#result").val(existsNumber + ch);
      } else {
        var sliceNumber = $("#result").val().slice(0, -1);
        $("#result").val(sliceNumber + ch);
      }
    }
  } else if (
    existsNumber == "" &&
    (ch == "+" || ch == "-" || ch == "*" || ch == "/")
  ) {
    $("#result").val(existsNumber);
  } else {
    // if (ch == ".") {
    //   if (existsNumber.includes(".")) {
    //     $("#result").val(existsNumber);
    //   } else {
    //     $("#result").val(existsNumber + ch);
    //   }
    // } else {
    //   $("#result").val(existsNumber + ch);
    // }
    $("#result").val(existsNumber + ch);
  }
};

const clearResult = () => {
  $("#result").val("");
};

const showResult = () => {
  var existsNumber = $("#result").val();
  var lastCharacter = existsNumber.slice(-1);

  if (
    lastCharacter == "+" ||
    lastCharacter == "-" ||
    lastCharacter == "*" ||
    lastCharacter == "/"
  ) {
    var total = eval($("#result").val().slice(0, -1));
    $("#result").val(total);
  }
  var total = eval($("#result").val());
  $("#result").val(total);
};

const deleteNumber = () => {
  var presentValue = $("#result").val();
  if (presentValue != "") {
    $("#result").val(presentValue.slice(0, -1));
  }
};

const getPercentage = () => {
  const totalAmount = eval($("#result").val());
  $("#result").val(totalAmount / 100);
};
