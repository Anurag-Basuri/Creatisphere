// image slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


// like button 1

var btn1 =document.getElementById('btn1');
function Toggle1(){
  if(btn1.classList.contains('far')){
  btn1.classList.remove('far');
  btn1.classList.add('fas');
  document.getElementById('like_count1').innerHTML = 4;
}
else{
  btn1.classList.remove('fas');
  btn1.classList.add('far');
  document.getElementById('like_count1').innerHTML -= 1;
}
}

// like button 2

var btn2 =document.getElementById('btn2');
function Toggle2(){
  if(btn2.classList.contains('far')){
  btn2.classList.remove('far');
  btn2.classList.add('fas');
  document.getElementById('like_count2').innerHTML = 4;
}
else{
  btn2.classList.remove('fas');
  btn2.classList.add('far');
  document.getElementById('like_count2').innerHTML -= 1;
}
}

// like button 3

var btn3 =document.getElementById('btn3');
function Toggle3(){
  if(btn3.classList.contains('far')){
  btn3.classList.remove('far');
  btn3.classList.add('fas');
  document.getElementById('like_count3').innerHTML = 4;
}
else{
  btn3.classList.remove('fas');
  btn3.classList.add('far');
  document.getElementById('like_count3').innerHTML -= 1;
}
}

// like button 4

var btn4 =document.getElementById('btn4');
function Toggle4(){
  if(btn4.classList.contains('far')){
  btn4.classList.remove('far');
  btn4.classList.add('fas');
  document.getElementById('like_count4').innerHTML = 4;
}
else{
  btn4.classList.remove('fas');
  btn4.classList.add('far');
  document.getElementById('like_count4').innerHTML -= 1;
}
}