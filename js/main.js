//Make "email me" button say "parksrichiework@gmail.com when you hover"
var emailMeButton = document.querySelector('.email-me');
emailMeButton.addEventListener('mouseover', changeEmailButton)


function changeEmailButton(){
  emailMeButton.innerHTML = 'parksrichiework@gmail.com';
  console.log('email button changed');
}


// Make skills dispenser appear when you scroll:
    window.addEventListener('scroll', openDispenser)
    var rightSide = document.getElementById("right-side"); 

    function openDispenser(){
        let dispenser= document.querySelector('#dispenserScroll')
       const scrolled = window.scrollY
        const scrollable= document.documentElement.scrollHeight - window.innerHeight

       if(window.scrollY >= 600){
        dispenser.classList.remove('noShow');
        rightSide.className= "right";
       }      

   console.log(scrolled);
    }

    // window.addEventListener('scroll', openGraphics)

    // // function openGraphics(){
    // //     // Make "see project details" appear when you scroll
    // //     if(window.scrollY >= 1900){
    // //       document.querySelector(".overlay1").className= "overlay";
    // //      } 
    // // }

    window.addEventListener('scroll', changeNav)

    function changeNav(){
      let nav= document.querySelector('#nav-bar');
      let consultation = document.querySelector('.openButton')


    if(window.scrollY > 2800 && window.scrollY <= 11000){
      nav.className= "nav-visual-design";
      consultation.className= 'openButton-scroll';     
     

     } else if(window.scrollY > 11000 && window.scrollY <= 16400){
      nav.className= "nav-web-design";
      consultation.className= 'openButton-scroll'
    
     } else if(window.scrollY > 16400 && window.scrollY <= 21000){
      nav.className= "nav-illustration";
      consultation.className= 'openButton-scroll';
     } else {
      nav.className= "";
      consultation.className= 'openButton' 
      consultation.classList.remove('openButton-scroll')
     
     }
    }

    //  START: Click "work" in navbar and reveal dropdown menu
     let workNav = document.querySelector('#work-nav');
     let workDropMenu = document.querySelector('.work-drop-menu')
    workNav.addEventListener('click', openWorkDropMenu);
    window.addEventListener('mouseup', closeWorkDropMenu);
    
     function openWorkDropMenu(e){    
      if(e.target){
        workDropMenu.classList.toggle('show');
        workNav.classList.toggle('open');
        workNav.innerHTML='<a title="internal link to portfolio">Work <b>&#9650;</b></a>'
      console.log('show the menu');
       }       
      }

      function closeWorkDropMenu(){     
      if(workDropMenu.classList.contains('show') && workNav.classList.contains('open')){        
        workDropMenu.classList.remove('show');
        workNav.classList.toggle('open');
        console.log('this aint it');
        }
      }
              
    //  END: click "work" in navbar and reveal dropdown menu


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
                   explain1.innerHTML = "<p>Adobe(CC+CS6), Posters, Album Art, Style Guide, Logos, Iconography, Typography, Press Kit, Viewer's Guides, Film Posters, Social Media Templates</p>";
                                   

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
                   explain3.innerHTML = "<p>HTML, CSS, CSS Flex, CSS Grid, Javascript, Figma, Sublime Text, Atom, Visual Studio Code, OOP, Github, Codepen</p>"

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

// THE DROPDOWN MENU FOR GAMES THAT I'VE CODED

let games= document.querySelector('#games-button');
let gamesDropdown = document.querySelector('#games-dropdown');

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// vvvvvvvvvvvvvvvvvvvvvvvvvvvvv CLICK TO FLIP RELIC POSTCARD vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let postcardFront = document.querySelector('#relic-postcard')
let postcardBack = document.querySelector('#postcard-back')

postcardFront.addEventListener('click', flipCard)

function flipCard(){
   if(postcardFront.src.match('img/relic-postcard-front-01.jpg')){
    postcardFront.src = 'img/relic-postcard-back.jpg';
    document.querySelector('#postcard-title').innerHTML= 'Postcard: Back (click to see front)';
  } else{
    postcardFront.src = 'img/relic-postcard-front-01.jpg';
    document.querySelector('#postcard-title').innerHTML= 'Postcard: Front (click to see back)';
    postcardFront.className= '#relic-postcard-flipped';
  }
    
}





//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6


   
          