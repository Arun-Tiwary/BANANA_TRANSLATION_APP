

// taking variables
var getInput=document.querySelector(".text");

var translate=document.querySelector(".translate");

var output=document.getElementById("output");

 var serverURL="https://api.funtranslations.com/translate/minion.json";

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


// creating function translate to get url from server

function translatedURL(input)
{
    return serverURL+"?"+"text="+input;

}

// creting function for error handling

function errorHandler(error)
{
    console.log("An error ocurred");
    alert("Try after some time");
}


function clickHandler(){
    var input=getInput.value; //takinginput
    console.log(input)


// Calling Server For Processing

fetch(translatedURL(input))
.then(response=>response.json())
.then(json=>{
   var  translatedText = json.contents.translated;
    // getElementById("output").text=translatedText;
    output.innerText=translatedText;

})

.catch(errorHandler)

};

translate.addEventListener("click",clickHandler)