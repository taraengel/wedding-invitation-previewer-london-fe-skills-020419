
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('keyup', e => copyWords(e));
})

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('keyup', e => copyWords2(e));
})

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('keyup', e => copyWords3(e));
})

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('keyup', e => copyWords4(e));
})

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('keyup', e => copyWords5(e));
})

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('keyup', e => copyWordsFirstInitial(e));
})

function copyWords(e) { 
  var firstTextContent = document.getElementById("firstname").value;
  console.log(firstTextContent)
  
  var secondTextContent = document.getElementById("firstname-copy");
  console.log(secondTextContent)
  secondTextContent.innerText = firstTextContent;
}

function copyWordsFirstInitial(e) {
  var firstTextChild = document.getElementById("firstname").value.firstElementChild.innerText;
  var secondTextChild = document.getElementById("initials");
  secondTextChild.innerText = firstTextChild;
}

function copyWords2(e) { 
  var firstTextContent = document.getElementById("secondname").value;
  console.log(firstTextContent)
  
  var secondTextContent = document.getElementById("secondname-copy");
  console.log(secondTextContent)
  secondTextContent.innerText = firstTextContent;
}

function copyWords3(e) { 
  var firstTextContent = document.getElementById("lastname").value;
  console.log(firstTextContent)
  
  var secondTextContent = document.getElementById("lastname-copy");
  console.log(secondTextContent)
  secondTextContent.innerText = firstTextContent;
}

function copyWords4(e) { 
  var firstTextContent = document.getElementById("date").value;
  console.log(firstTextContent)
  
  var secondTextContent = document.getElementById("date-copy");
  console.log(secondTextContent)
  secondTextContent.innerText = firstTextContent;
}

function copyWords5(e) { 
  var firstTextContent = document.getElementById("location").value;
  console.log(firstTextContent)
  
  var secondTextContent = document.getElementById("location-copy");
  console.log(secondTextContent)
  secondTextContent.innerText = firstTextContent;
}

function classicStyle() {
  document.getElementById('invitation').classList="classic card";
}
function springStyle() {
  document.getElementById('invitation').classList="spring card";
}
function formalStyle() {
  document.getElementById('invitation').classList="formal card";
}

