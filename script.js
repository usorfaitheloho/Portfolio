import projectDatas from './projectDatas.js';

console.log(projectDatas)
// Mobile menu navigation functionality
const container = document.getElementsByClassName('toggle-menu')[0];
const icon = document.querySelector('.hamburger .fa-bars');
const logo = document.querySelector('.logo');

container.style.visibility = 'hidden';

function changeIcon() {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
  icon.style.position = 'absolute';
  logo.style.visibility = 'hidden';
  icon.style.right = '0';
  icon.style.marginRight = '24px';
  if (container.style.visibility === 'hidden') {
    container.style.visibility = 'visible';
  } else if (container.style.visibility !== 'hidden') {
    container.style.visibility = 'hidden';
    logo.style.visibility = 'visible';
  }
}

function hideMenu() {
  container.style.visibility = 'hidden ';
  logo.style.visibility = 'visible';
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
}
changeIcon();
hideMenu();

document.querySelector('.modals').innerHTML = projectDatas.map((data) => `
<div class="modal">
<div class="modal-container">
<div class="modal-wrapper">
<div class="close" id="close-desktop">
<i class="fa fa-times fa-1x close-btn"></i>
</div>
  <div class="project-image"><div class="close close-mobile">
  <i class="fa fa-times fa-1x"></i>
  </div><img src= ${data.featuredImage} alt="Project Image 1" />
   </div>
<div class="modal-project-desc-tech-details">
  <div class=" live-source-div"> 
  <h4 class="project-title"> ${data.projectTitle}</h4> 
  <div class="modal-buttons">
  <button class="btn btn-projects" type="button">
    <a href=${data.liveVersion} target="_blank"> See Live </a>
     <img src= ${data.liveVersionImage} /></button>
  <button class="btn btn-projects-source" type="button">
  <a href=${data.source} target="_blank"> See Source </a>
  <img src= ${data.sourceImage} /></button>
  </div>
  </div>  
    <ul class="tech-list-modal-container">
        <li class="project-technologies">
            <p class="technology">${data.technologies[0]}</p>
        </li>
        <li class="project-technologies">
            <p class="technology">${data.technologies[1]}</p>
        </li>
        <li class="project-technologies">
            <p class="technology">${data.technologies[2]}</p>
        </li>
    </ul>
     <p class="modal-project-desc-tech-details">${data.description}</p> 
    <div class="modal-buttons live-source-mobile">
    <button class="btn btn-projects" type="button">
    <a href=${data.liveVersion} target="_blank"> See Live </a>
     <img src= ${data.liveVersionImage} class="source-image"/></button>
  <button class="btn btn-projects-source" type="button">
  <a href=${data.source} target="_blank"> See Source </a>
  <img class="source-image" src= ${data.sourceImage} /></button>
    </div>
</div>
</div>
</div>
</div>`).join('');

// const projectCard = [
//   {
//     projectTitle: 'Covid-19 Data App',
//     description: 'This is a react project that displays covid details for different countries and regions within those regions.',
//     technologies: ['React Js', 'Redux', 'jest'],
//     showImage:'./images/Covid-app2.PNG',
//   },
//   {
//     projectTitle: 'NetMovie',
//     description: 'NetMovie is a web application based on an external TV Maze API that provides details about movies, showing comment section and reservations as well as booking. The API provides data about TV Shows.Ruby on Rails',
//     technologies: ['Javascript', 'css', 'html'],
//     showImage:'./images/Net-movies.PNG',
//   },
//   {
//     projectTitle: 'Space-Travellers',
//     description: 'Space-Travellers Hub is a web application made for a company that provides commercial and scientific space travel services. The application allows users (future clients) to book rockets and join selected space missions.',
//     technologies: ['React', 'Redux', 'CSS'],
//     showImage:'./images/space-travellers.PNG',
//   },
//   {
//     projectTitle: 'BookStore',
//     description: 'The Bookstore is a website that displays books available in bookstore. It tells you about the author,the genre of the book and chapter details. The site contain these features : list of books, add a book and remove a selected book.',
//     technologies: ['Redux', 'React', 'Css3'],
//     showImage:'./images/Book-Store.PNG',
//   },
//   {
//     projectTitle: 'Awesome Books',
//     description: 'Awesome Book is a web app that enables you to make a list of books. This app was made as a project in the Microverse Program .',
//     technologies: ['Javascript', 'css', 'html'],
//     showImage:'./images/Awesome-books.PNG',
//   },
//   {
//     projectTitle: 'Hackherthon',
//     description: 'Hackherthon is a website for an upcoming hack event for female Software developers , to be held in Nigeria.',
//     technologies: ['css', 'javascript', 'html'],
//     showImage:'./images/Hackherthon.PNG',
//   },
// ];
document.querySelector('.allprojects-container').innerHTML = projectDatas.map((data) => `
<div class="project-container-card">
<div class="project-image"><img src= ${data.featuredImage} alt="Project Image 1" /></div>
<div class="project-desc-tech-details">
    <h4 class="project-desc">${data.projectTitle}</h4>
    <ul class="tech-list-container">
        <li class="tech-list">
            <p class="tech-name">${data.technologies[0]}</p>
        </li>
        <li class="tech-list">
            <p class="tech-name">${data.technologies[1]}</p>
        </li>
        <li class="tech-list">
            <p class="tech-name">${data.technologies[2]}</p>
        </li>
    </ul>
    <button class="btn btn-projects" type="button">See Projects</button>
    </div>
</div>
`).join('');

// event listeners for opening modal on button click
const modalButtons = Array.from(document.querySelectorAll('.btn-projects'));
const modals = Array.from(document.querySelectorAll('.modal'));
const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]]);
modalButtonZip.forEach((pair) => {
  pair[0].addEventListener('click', () => {
    pair[1].style.display = 'block';
  });
});

// // event listener for closing modal on button click
 const closeBtn =(str)=>{
document.querySelectorAll(str).forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((modal) => { modal.style.display = 'none'; });
  });
});
 } 
 closeBtn('.close-mobile');
 closeBtn('.close-btn');

const email = document.getElementById('email');
const error = document.getElementById('warning');
const form = document.getElementById('Contact');

function formValidate() {
  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Your email is not in lowercase. Consider using ${email.value.toLowerCase()} instead`;
    return false;
  }
  return true;
}

form.addEventListener('submit', (postIt) => {
  if (!formValidate()) {
    postIt.preventDefault();
  }
});

// local storage start here

form.addEventListener('input', () => {
  const jsonForm = {
    name: document.querySelector('.form-control1').value,
    email: document.querySelector('.form-control2').value,
    textArea: document.querySelector('.form-control3').value
  };

  localStorage.setItem('contactWay', JSON.stringify(jsonForm));
});

const nonJsonForm = JSON.parse(localStorage.getItem('contactWay'));
if(nonJsonForm !== null) {
  document.querySelector('.form-control1').value = nonJsonForm.name;
  document.querySelector('.form-control2').value = nonJsonForm.email;
  document.querySelector('.form-control3').value = nonJsonForm.textArea;
}
