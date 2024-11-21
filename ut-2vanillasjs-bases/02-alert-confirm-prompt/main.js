const text1 = "This is an alert message, click me to move on!!!";

const textConfirm = "Show me in alert if you clicked on ok or false";

const textTrue = "You cliked on true click me to move on!!!";
const textFalse = "You cliked on false click me to move on!!!";

const textInput = "Show me in an alert the message typed";
const placeHolder = "Type something";
const textRespInput1 = "You typed: ";
const textRespInput2 = "!!! click me to move on!!!";

let alert1 = alert(text1);

if (confirm(textConfirm)) {
  alert(textTrue);
} else {
  alert(textFalse);
}

let input = prompt(textInput, placeHolder);
alert(textRespInput1 + input + textRespInput2);
