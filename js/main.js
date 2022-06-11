    

// Make skills dispenser appear when you scroll:
    window.addEventListener('scroll', openDispenser)

    function openDispenser(){
        let dispenser= document.querySelector('#dispenserScroll')
       const scrolled = window.scrollY
        const scrollable= document.documentElement.scrollHeight - window.innerHeight



       if(window.scrollY > 900){
        dispenser.classList.remove('noShow')
       } 
     // Make "see project details" appear when you scroll
       if(window.scrollY > 1900){
        document.querySelector(".overlay1").className= "overlay";
       }      
   console.log(scrolled)
    }




    // // Click to open skills dispenser
      document.querySelector("#dispenserClick").addEventListener('click', dispense)

      function dispense(){
        var rightSide = document.getElementById("right-side");
        var Image_Id = document.getElementById("dispenserClick")   
        
        
          rightSide.className= "right";
          if (Image_Id.src.match('img/skills-dispenser-click-me.png')){
          Image_Id.src = "img/skills-dispenser-open.png";
      }      

      };

    // click functions: EXPLAIN SKILLS
    //click to reveal visual design
        document.getElementById("visualDesign").addEventListener('click', visualDesignReveal)

              function visualDesignReveal() {

               var Image_Id = document.getElementById('visualDesign');
               var explain1 = document.getElementById('explainVisualDesign');

              //when clicked, if capsule is closed this will open it and change closed capsule img to open capsule img
               if (Image_Id.src.match("img/visual-design-closed.png")) {
                   Image_Id.src = "img/visual-design-open.png";
                }
                //when clicked again it will close capsule
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

            //click to reveal Design Thinking
              document.querySelector("#designThinking").addEventListener('click', revealDesignThinking)

                function revealDesignThinking() {

               var Image_Id = document.querySelector('#designThinking');
               var explain2 = document.querySelector('#explainDesignThinking');
              
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

            //click to reveal Design Thinking
              document.querySelector("#webDesign").addEventListener('click', revealWebDesign)

                function revealWebDesign() {

               var Image_Id = document.querySelector('#webDesign');
               var explain3 = document.querySelector('#explainWebDesign')
              
               if (Image_Id.src.match("img/web-design-closed.png")) {
                   Image_Id.src = "img/web-design-open.png";
                }
               else {
                  Image_Id.src = "img/web-design-closed.png";
                }
                if (Image_Id.src.match("img/web-design-open.png")) {
                   explain3.innerHTML = "<p>HTML, CSS, Javascript, Figma, Sublime Text, Atom, Visual Studio Code, OOP, Github, Codepen</p>"

                }
              if (Image_Id.src.match("img/web-design-closed.png")) {
                   explain3.innerHTML = "<p> </p>"              
                }           
                };

            //click to reveal Illustration capsule
              document.querySelector("#illustration").addEventListener('click', revealIllustration)

              function revealIllustration() {

               var Image_Id = document.querySelector('#illustration');
               var explain4 = document.querySelector('#explainIllustration');
                            

             if (Image_Id.src.match("img/illustration-closed.png")) {
                   Image_Id.src = "img/illustration-open.png"
                   explain4.innerHTML = "<p> </p>"               
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
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
          slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }
    

// grab the Consultation form
const form= document.querySelector('#formConsulting')
 
// OPEN CONSULTING REQUEST BUTTON
document.querySelector('#consultation').addEventListener('click', open)

function open(){
form.style.display="block"
}


// CLOSE PRICING AND SHIPPING REQUEST BUTTONS
document.querySelector('#closeBtnConsulting').addEventListener('click', close);

function close(){       
form.style.display= "none"    
}

let formArray = [form]
window.addEventListener('mouseup', function(e){  
  
  for(let i=0; i < formArray.length; i++){
    let form = formArray[i];
    if(e.target != form && e.target.parentNode.parentNode != form){
    form.style.display= "none";    
    }
  }
})

      



   
          