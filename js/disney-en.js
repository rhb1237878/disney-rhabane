// The continue button and email input JS:

const continueBtn = document.querySelector('.Continue-Button');
const emailInput = document.querySelector('.Email-bar');
const badMailDiv = document.querySelector('.badmail');

continueBtn.addEventListener('click', function () {
  const email = emailInput.value.trim();
  // The .trim() method is called on the email to remove any leading or trailing spaces.
  const regex = /\S+@\S+\.\S+/;
  // \S is a shorthand character class that matches any non-whitespace character. 
  // The + is a quantifier that means "one or more." So \S+ means "one or more non-whitespace characters."
  if (!regex.test(email)) {
    // The test() method of the regular expression object is called on the email string to check if it matches the regex pattern.
    // the ! means NOT, so this line of code basically says, if the email doesnt contain an @ then text then . then text, then do:
    emailInput.style.border = '1px solid red';
    badMailDiv.style.display = 'block';
    //  If the email is not valid, the code changes the border of the email input field to red and displays an error message.
  } else {
    // If the email is valid, the code redirects the user to the login page with the email parameter appended to the URL.
    window.location.href = 'https://www.disneyplus.com/en-gb/sign-up?email=' + encodeURIComponent(email);
  }
});

emailInput.addEventListener('input', function () {
  emailInput.style.border = '';
  badMailDiv.style.display = '';
  // resets border and error message when user writes in the input.
});

emailInput.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    document.getElementsByClassName('Continue-Button')[0].click();
  }
  // makes it so the enter key (code 13) when pressed inside the input, make the code press the continue button
});



// down arrow scrolling function on click:
const V = document.querySelector('.down-arrow');

V.addEventListener('click', () => {
  const targetElement = document.querySelector('.bloc2');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});

// Nav going invisible and showing nav2
const fixedNav = document.querySelector('.navfirst');
const scrollNav = document.querySelector('.navmain');

window.addEventListener('scroll', () => {
  // Detects scroll level of site
  const scrollPosition = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const scrollThreshold = pageHeight * 0.15;
// if scroll level is more than 0.15, then navmain will show
  if (scrollPosition >= scrollThreshold) {
    scrollNav.style.opacity = '1';
    scrollNav.style.zIndex = '200';
// if scroll level is not higher than 0.15, then navmain dissapears
  } else {
    scrollNav.style.opacity = '0';
    scrollNav.style.zIndex = '0';
  }
});

//bloc4 sliding / animation of bars

const buttons = document.querySelectorAll('.button');
const hiddens = document.querySelectorAll('.bar-hidden');
const icons = document.querySelectorAll('.vertical');

// This creates a for loop that goes through each element in the buttons array.
// For each button element, it adds an event listener that listens for a "click" event.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    // if the corresponding button's number has it's bar-hidden hidden, it will reveal it
    if (hiddens[i].style.maxHeight === '0px' || hiddens[i].style.maxHeight === '') {
      hiddens[i].style.maxHeight = '500px';
      icons[i].style.opacity = '0';
    } 
        // if the bar hidden is shown, this will hide it upon another click.
    else { 
      hiddens[i].style.maxHeight = '0px';
      icons[i].style.opacity = '1';
    }
  });
}

// language change 

const languageSelector = document.querySelector('#language-selector');
languageSelector.addEventListener('change', function() {
  const selectedOption = languageSelector.options[languageSelector.selectedIndex];
  window.location.href = selectedOption.value;
});
