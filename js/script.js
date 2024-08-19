$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 50){
        $('.navbar').addClass('sticky_header');
    }
    else {
         $('.navbar').removeClass('sticky_header');
    }
    });  



// slider part st 


var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,4000);
  
}

changeSlide();

// slider part end

// drop down menu 
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// drop down menu 





  // link another page st

// Change button to active when clicked
// $(".category-button").click(function() {
//   $(".category-button").removeClass("active");
//   $(this).addClass("active");
// });


// Makes variables for button and page content 
var $categoryButton = $(".category-button");
var $pageContent = $(".page-content");

// Hide all page content shows first one
$(".page-content")
  .hide()
  .first()
  .show();

// When button is clicked, show content 
$categoryButton.on("click", function(e) {
var $category = $(this).data("target");
  $pageContent
    .hide()
    .find('img').hide()
    .end()
    .filter("." + $category)
    .show()
    .find('img').fadeIn();
});


// link another part end 
function toggleLogin() {
  document.querySelector(".overlay").classList.toggle("open");
}