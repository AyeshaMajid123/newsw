   
    var width = screen.width;
    console.log(width);
    function check(){
      window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            document.getElementById("intro_image1").style.width='70%';
            document.getElementById("intro_image2").style.width='70%';
            document.getElementById("intro_image3").style.display="none";
          console.log("Screen width is at less than 768px")
        } else {
          console.log("Screen width is greater than 768px")
        }
      })
    }
    