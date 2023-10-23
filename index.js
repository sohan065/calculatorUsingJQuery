const insertNumber = (number) => {
  var existsNumber = $("#result").val();
  var lastCharacter = existsNumber.slice(-1);
  if (lastCharacter == "+" && lastCharacter == number) {
    $("#result").val(existsNumber);
  } else if (lastCharacter == "-" && lastCharacter == number) {
    $("#result").val(existsNumber);
  } else if (lastCharacter == "*" && lastCharacter == number) {
    $("#result").val(existsNumber);
  } else if (lastCharacter == "/" && lastCharacter == number) {
    $("#result").val(existsNumber);
  } else {
    $("#result").val(existsNumber + number);
  }
};

const clearResult = () => {
  $("#result").val("");
};

const showResult = () => {
  const result = eval($("#result").val());
  $("#result").val(result);
};

const deleteNumber = () => {
  var presentValue = $("#result").val();
  if (presentValue != "") {
    $("#result").val(presentValue.slice(0, -1));
  }
};
