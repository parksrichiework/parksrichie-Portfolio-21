    
    // // onclick: SHOW SKILLS VIA DISPENSER
      document.getElementById("dispenser-click").onclick = function() {
        dispense()
          };

      function dispense(){
        var turn = document.getElementById("right-side");
        var Image_Id = document.getElementById("dispenser-click")   
        
        if (Image_Id.src.match(document.getElementById("dispenser-click"))){
          turn.className= "right";
          Image_Id.src = "img/skills-dispenser-open.png";

      };

    // onclick: EXPLAIN SKILLS
        document.getElementById("skills1").onclick = function() {skills1Reveal()
          }};

              function skills1Reveal() {

               var Image_Id = document.getElementById('skills1');
               var explain1 = document.getElementById('explain1');
              
               if (Image_Id.src.match("img/visual-design-closed.png")) {
                   Image_Id.src = "img/visual-design-open.png";
                }
               else {
                  Image_Id.src = "img/visual-design-closed.png";
                }
                if (Image_Id.src.match("img/visual-design-open.png")) {
                   explain1.innerHTML = "<p>Adobe(CC+CS6), Posters, Album Art, Style Guide, Logos, Iconography, Typography</p>"

                }
                if (Image_Id.src.match("img/visual-design-closed.png")) {
                   explain1.innerHTML = "<p> </p>"              
                }           
                };


              document.getElementById("skills2").onclick = function() {
            skills2Reveal()
          };
                function skills2Reveal() {

               var Image_Id = document.getElementById('skills2');
               var explain2 = document.getElementById('explain2');
              
               if (Image_Id.src.match("img/design-thinking-closed.png")) {
                   Image_Id.src = "img/design-thinking-open.png";
                }
               else {
                  Image_Id.src = "img/design-thinking-closed.png";
                }
                if (Image_Id.src.match("img/design-thinking-open.png")) {
                   explain2.innerHTML = "<p>Brainstorming, Sketching, Mindmapping, Design Research, Branding</p>"

                }
              if (Image_Id.src.match("img/design-thinking-closed.png")) {
                   explain2.innerHTML = "<p> </p>"              
                }           
                };

              document.getElementById("skills3").onclick = function() {
          skills3Reveal()
          };
                function skills3Reveal() {

               var Image_Id = document.getElementById('skills3');
               var explain3 = document.getElementById('explain3')
              
               if (Image_Id.src.match("img/web-design-closed.png")) {
                   Image_Id.src = "img/web-design-open.png";
                }
               else {
                  Image_Id.src = "img/web-design-closed.png";
                }
                if (Image_Id.src.match("img/web-design-open.png")) {
                   explain3.innerHTML = "<p>HTML, CSS, Javascript, Figma, Sublime Text, Atom, Github, Codepen</p>"

                }
              if (Image_Id.src.match("img/web-design-closed.png")) {
                   explain3.innerHTML = "<p> </p>"              
                }           
                };

              document.getElementById("skills4").onclick = function() {
          skills4Reveal()
          };

              function skills4Reveal() {

               var Image_Id = document.getElementById('skills4');
               var explain4 = document.getElementById('explain4');
                            

             if (Image_Id.src.match("img/illustration-closed.png")) {
                   Image_Id.src = "img/illustration-open.png"              
                }
               else {
                  Image_Id.src = "img/illustration-closed.png";
                }

              if (Image_Id.src.match("img/illustration-open.png")) {
                   explain4.innerHTML = "<p>Sketchbook, Adobe(Ai+Ps)</p>"

                }
              if (Image_Id.src.match("img/illustration-closed.png")) {
                   explain4.innerHTML = "<p> </p>"              
                }          
                };  

    //modal for Graphic design portfolio details
            // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

    // JS for gallery
          var slideIndex = 1;
      showSlides(slideIndex);

      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }
    

      // Make skills dispenser appear when you scroll:
        // window.onscroll = function() {theFunction()};

        //     function theFunction() {
        //       if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        //         document.getElementById("dispenser-scroll").className = "slideUp";
        //       }
        //     };

            window.addEventListener('scroll',() =>{
                
                const dispenser = document.getElementById("dispenser-scroll")
                const scrolled = window.scrollY;
                const graphicsExplained = document.querySelector('.contain')

               

                 if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    dispenser.className= "slideUp"
                 }

                 if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
                    graphicsExplained.classname= "conatain overlay"
                 }

                 console.log(scrolled)

             });



        // Make "see project details" appear when you scroll
       
    



   