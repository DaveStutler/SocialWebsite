// variables
let themeButton = document.getElementById("theme-button");
let signNowButton = document.getElementById('sign-now-button');
let signature = document.querySelector('.signatures');
let counter = document.querySelector('#counter');
let count = 3;

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

const addSignature = () => {
  let counter = document.querySelector('#counter');
  counter.remove();  
  
  // get the submission's input
  let name = document.querySelector("#name").value;
  let hometown = document.querySelector("#hometown").value;
  let email = document.querySelector("#email").value;
  
  const Realsign = '🖊️ ' + name + ' from ' + hometown + " support this.";

  const p = document.createElement('p');
  p.innerText = Realsign;

  signature.appendChild(p);

  // count
  
  count += 1;
  const p_count = document.createElement('p');
  p_count.setAttribute("id","counter");
  
  const totalSign = "🖊️ " + count + " people have signed this petition and support this cause."
  p_count.innerText = totalSign;
  signature.appendChild(p_count);
}

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  
  let person = {
  name: petitionInputs[0].value, // accesses and saves value of first input
  homeTown: petitionInputs[1].value,
  email: petitionInputs[2].value,
}
  
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // TODO: Validate the value of each input
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  // TODO: Call addSignature() and clear fields if no errors
  if (containsErrors == false) {
    addSignature();
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

let scaleFactor = 1;
let modalImage = document.getElementById("thanks-img");

const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `❤️ thank you ${person.name}`;
  let intervalId = setInterval(scaleImage, 500);
  clearInterval(intervalId);
}



const scaleImage = () => {
  if (scaleFactor === 1) {
  scaleFactor = 0.8;
  } else {
  scaleFactor = 1;
  }
  modalImage.style.transform = 'scale(${scaleFactor})';
} 

setTimeout(() => {
  modal.style.display = "none";
  clearInterval(intervalId);
}, 4000)


window.addEventListener("scroll", reveal);
themeButton.addEventListener("click", toggleDarkMode);
signNowButton.addEventListener('click', validateForm);



