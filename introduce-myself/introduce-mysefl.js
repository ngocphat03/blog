var mybutton = document.getElementById("back-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 
function playSound() {
  const audio = new Audio('audio.mp3');
  audio.play();
}
const test001 = document.querySelector('#test001');
test001.onclick = () => {
  playSound();
  test001.style.top = '-50px';
}