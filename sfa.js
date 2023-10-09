let themeButton = document.getElementById("theme-button");

let animation = {
  revealDistance: 150,
  initalOpacity: 0,
  transitionDelay: 0,
  transitionDuration: "2s",
  transitionProperty: "all",
  transitionTimingFunction: "ease"
};

// reveal container
const revealableContainers = document.querySelectorAll(".revealable");

// function reveal
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) 
  {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) 
    {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } 
    else 
    {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
}

// toggle dark mode
const toggleDarkMode = () => {

  // Manipulate the DOM here
  document.body.classList.toggle("dark-mode"); // add class = dark-mode to the body 
}

window.addEventListener("scroll", reveal);

themeButton.addEventListener("click", toggleDarkMode);
