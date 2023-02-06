
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var nav = document.querySelectorAll('.nav-link');
window.onscroll = function(){
  // code tạo hiệu ứng ẩn hiện khi kéo trượt
  if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
    document.getElementById('imglogo').style.width = '70px';
    document.getElementById('textlogo').style.fontSize = '13px';
    document.getElementById('imglogo').style.transition = 'all .5s'
    document.getElementById('textlogo').style.transition = 'all .5s'
    
    for(var i = 0; i < nav.length; i++){
      nav[i].style.fontSize = '13px';
      nav[i].style.transition = 'all .5s'
    }
  }
  else{
    document.getElementById("header").style.transform = "unset";
    document.getElementById('imglogo').style.width = '90px';
    document.getElementById('textlogo').style.fontSize = '12px';
    
    for(var i = 0; i < nav.length; i++){
      nav[i].style.fontSize = '15px';
      // nav[i].style.transition = 'all .5'
    }
    
  }

  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    
    var themClass = document.getElementById("infotext");
    themClass.classList.add('animate__animated');
    themClass.classList.add('animate__fadeInUp');
    
  }
  else{
    var themClass = document.getElementById("infotext");
    themClass.classList.remove('animate__animated');
    themClass.classList.remove('animate__fadeInUp');
  }
}