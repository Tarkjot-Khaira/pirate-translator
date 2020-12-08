var inputText = document.querySelector("#txt-input");
var translateBtn = document.querySelector("#btn-translate");
var outputText = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/braille/unicode.json";


function getTranslationUrl(text) {
    translatedUrl = url + "?" + "text=" + text;
    return translatedUrl;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong!!");
}

translateBtn.addEventListener("click", function clickHandler() {
    var textValue=inputText.nodeValue;
  fetch(getTranslationUrl(textValue))
    .then(response => response.json())
    .then(json =>{
        outputText.innerText = json.contents.translated;
    })
    .catch(errorHandler)
})
