var inputTxt = document.querySelector('#txt-input');
var btnInput = document.querySelector('#btn-input');
var outputDiv = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationUrl(input){
    return serverURL + "?" + "text=" + input;
}


function clickHandler(){
    var iptext = inputTxt.value;       //reading the input

    fetch(getTranslationUrl(iptext))              //processing i/p
    .then(response => response.json())
    .then(json => {
        var translated = json.contents.translated;
        outputDiv.innerHTML = translated;                 //reading the output
    })
    .catch(err => alert('Error with the server', err));         //error handler
}

btnInput.addEventListener('click', clickHandler);

