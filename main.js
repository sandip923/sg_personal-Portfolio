
/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText =
    document.getElementById("typing-text");


const words = [

    "BCA Student",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Web Developer",
    "AI Enthusiast"

];


let wordIndex = 0;
let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}


typeEffect();

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    
    // Mouse coordinates relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage positions for the glow effect
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    
    // Normalize coordinates around the center point (0,0)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation angles (Max 15 degrees tilt)
    const angleX = -((y - centerY) / centerY) * 15;
    const angleY = ((x - centerX) / centerX) * 15;
    
    // Apply changes using custom properties
    card.style.setProperty('--rx', `${angleX}deg`);
    card.style.setProperty('--ry', `${angleY}deg`);
    card.style.setProperty('--mx', `${glowX}%`);
    card.style.setProperty('--my', `${glowY}%`);
  });

  // Smoothly snap back to origin when mouse leaves the card
  card.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.5s ease";
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  });
  
  // Clear the transition property when mouse re-enters so it's snappy
  card.addEventListener('mouseenter', () => {
    card.style.transition = "none";
  });
});