//define functions here
function getIt (){
  $('p').on('click', function (){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function (){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input').on('keydown', function(key){
    if key
  })
}

$(document).ready(function(){

getIt();
frameIt();

});
