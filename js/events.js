//define functions here
function getIt (){
  $('p').on('click', function (){
    alert('Hey!')
  })
}

function frameIt(){
  $('.tasty').on('load', function (){
    $('img').style.border
  })
}

$(document).ready(function(){

getIt();
frameIt();

});
