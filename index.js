const insertNumber = (number) => {
  var existsNumber = $("#result").val();
  var lastCharacter = existsNumber.slice(-1);

  if (
    (lastCharacter == "+" ||
      lastCharacter == "-" ||
      lastCharacter == "*" ||
      lastCharacter == "/" ||
      lastCharacter == ".") &&
    lastCharacter == number
  ) {
    $("#result").val(existsNumber);
  } else {
    $("#result").val(existsNumber + number);
    // if (number == "-" || number == "*" || number == "/") {
    //   var sliceNumber = $("#result").val().slice(0, -1);
    //   alert(sliceNumber + number);
    //   $("#result").val(sliceNumber + number);
    // } else {

    // }
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
