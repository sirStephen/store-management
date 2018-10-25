var menu = document.getElementById('menu');
var overlay = document.getElementById('overlay');
var cross = document.querySelector('.cross');

//Create function for on menu hover

menu.addEventListener('click', function () {
    overlay.animate([
        {transform: 'translatex(0%)'},
        {transform: 'translatex(100%)'}
      ]);
  
  if (overlay.style.display === "block") {
           overlay.style.display = "none";
      } else {
           overlay.style.display = "block";
      } 
  

});

cross.addEventListener('click', function () {
  
  overlay.style.display = "none";
  
  
});