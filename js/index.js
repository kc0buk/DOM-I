const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navMain = document.querySelectorAll(`nav a`);

let i = 1;

navMain.forEach((item) => {
  item.textContent = siteContent[`nav`][`nav-item-${i}`];
  i = i + 1;
  item.style.color = `green`;
});

const navNewOne = document.createElement(`a`);
navNewOne.textContent = `Home`;
const navNewTwo = document.createElement(`a`);
navNewTwo.textContent = `Secret`;
const navBeginning = document.querySelector(`nav`);
navBeginning.prepend(navNewOne);
navBeginning.appendChild(navNewTwo);

const newNav = document.querySelectorAll(`nav a`);
// console.log(newNav);
newNav.forEach((item) => item.style.textTransform = `uppercase`);

// newNav.style.textTransform = 'capatilize';

const headline = document.querySelector(`.cta-text h1`);
// const headlineSplit = siteContent[`cta`][`h1`].split(` `);
// const br = document.createElement(`br`);
// console.log(headlineSplit);
// const headlineNew = headlineSplit[0] + br + headlineSplit[1];
// console.log(headlineNew);
headline.textContent = siteContent[`cta`][`h1`];
// headline.style.width = `40%`;

const ctaImg = document.querySelector(`#cta-img`);
ctaImg.src = siteContent[`cta`][`img-src`];

const ctaButton = document.querySelector(`.cta-text button`);
ctaButton.textContent = siteContent[`cta`][`button`];

const topHeadlines = document.querySelectorAll(`.top-content h4`);
topHeadlines[0].textContent = siteContent[`main-content`][`features-h4`];
topHeadlines[1].textContent = siteContent[`main-content`][`about-h4`];

const topContentDesc = document.querySelectorAll(`.top-content p`);
topContentDesc[0].textContent = siteContent[`main-content`][`features-content`];
topContentDesc[1].textContent = siteContent[`main-content`][`about-content`];

const middleImg = document.querySelector(`#middle-img`);
middleImg.src = siteContent[`main-content`][`middle-img-src`];

const bottomHeadlines = document.querySelectorAll(`.bottom-content h4`);
bottomHeadlines[0].textContent = siteContent[`main-content`][`services-h4`];
bottomHeadlines[1].textContent = siteContent[`main-content`][`product-h4`];
bottomHeadlines[2].textContent = siteContent[`main-content`][`vision-h4`];


const bottomContentDesc = document.querySelectorAll(`.bottom-content p`);
bottomContentDesc[0].textContent = siteContent[`main-content`][`services-content`];
bottomContentDesc[1].textContent = siteContent[`main-content`][`product-content`];
bottomContentDesc[2].textContent = siteContent[`main-content`][`vision-content`];

const contactHeadline = document.querySelector(`.contact h4`);
contactHeadline.textContent = siteContent[`contact`][`contact-h4`];

const contactAddress = document.querySelectorAll(`.contact p`);
contactAddress[0].textContent = siteContent[`contact`][`address`];
contactAddress[1].textContent = siteContent[`contact`][`phone`];
contactAddress[2].textContent = siteContent[`contact`][`email`];

const footer = document.querySelector(`footer p`);
footer.textContent = siteContent[`footer`][`copyright`];

const subHeadlines = document.querySelectorAll(`h4`);
// console.log(subHeadlines);
subHeadlines.forEach((item) => item.style.color = `dodgerblue`);



const btn = document.querySelector(`.cta-text button`);
// console.log(btn);
const h1 = document.querySelector(`h1`);
h1.classList.add(`color`);

btn.addEventListener(`click`, function() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = `#`;
  let randomNumber = (() => Math.floor(Math.random() * hex.length));
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  btn.style.backgroundColor = `${hexColor}`;
  h1.style.color = `${hexColor}`;
  console.log(hexColor);
})

// btn.addEventListener('click', function() {
//   let hexColor = '#'
//       for (let i = 0; i < 6; i++) {
//           hexColor += hex[getRandomNumber(0,hex.length-1)];
//           // console.log(getRandomNumber());
//       }
//       color.textContent = hexColor;
//       document.body.style.backgroundColor = hexColor;
// })
