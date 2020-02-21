//define functions here
function getIt (){
  $('p').on('click', function (){
    alert('Hey!')
  })
}

function frameIt(){
  $('.tasty').on('load', function (){
    $('img').css({"border-color": "red", 
             "border-weight":"1px", 
             "border-style":"solid"})
  })
}

$(document).ready(function(){

getIt();
frameIt();

});
