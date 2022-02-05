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

// Project section dynamic load and pop-up window implementation

const projectDatas = [
  {
    projectTitle: 'Keeping track of hundred of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
    liveVersion: 'See Live',
    source: 'See source',
  },
  {
    projectTitle: 'Keeping track of hundred of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
    liveVersion: 'See Live',
    source: 'See source',
  },
  {
    projectTitle: 'Keeping track of hundred of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
    liveVersion: 'See Live',
    source: 'See source',
  },
  {
    projectTitle: 'Keeping track of hundred of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
    liveVersion: 'See Live',
    source: 'See source',
  },
  {
    projectTitle: 'Keeping track of hundred of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
    liveVersion: 'See Live',
    source: 'See source',
  },
  {
    projectTitle: 'Keeping track of hundred of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
    liveVersion: 'See Live',
    source: 'See source',
  },
];

document.querySelector('.modals').innerHTML = projectDatas.map((data) => `
<div class="modal">
<div class="modal-container">
<div class="modal-wrapper">
<div class="close" id="close-desktop">
<i class="fa fa-times fa-1x"></i>
</div>
  <div class="project-image"><div class="close close-mobile">
  <i class="fa fa-times fa-1x"></i>
  </div><img src= ${data.featuredImage} alt="Project Image 1" />
   </div>
<div class="modal-project-desc-tech-details">
  <div class=" live-source-div"> 
  <h4 class="project-title"> ${data.projectTitle}</h4> 
  <div class="modal-buttons">
  <button class="btn btn-projects" type="button">${data.liveVersion}<img src= ${data.liveVersionImage} /></button>
  <button class="btn btn-projects-source" type="button">${data.source}<img src= ${data.sourceImage} /></button>
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
    <button class="btn btn-projects-live" type="button">${data.liveVersion}<img src= ${data.liveVersionImage} /></button>
    <button class="btn btn-projects-source" type="button">${data.source}<img src= ${data.sourceImage} /></button>
    </div>
</div>
</div>
</div>
</div>`).join('');

const projectCard = [
  {
    projectTitle: 'Multi-Post Stories Gain + Glory',
    description: 'Ruby on Rails',
    technologies: ['Ruby on Rails', 'css', 'javascript', 'html'],
  },
  {
    projectTitle: 'Multi-Post Stories Gain + Glory',
    description: 'Ruby on Rails',
    technologies: ['Ruby on Rails', 'css', 'javascript', 'html'],
  },
  {
    projectTitle: 'Multi-Post Stories Gain + Glory',
    description: 'Ruby on Rails',
    technologies: ['Ruby on Rails', 'css', 'javascript', 'html'],
  },
  {
    projectTitle: 'Multi-Post Stories Gain + Glory',
    description: 'Ruby on Rails',
    technologies: ['Ruby on Rails', 'css', 'javascript', 'html'],
  },
  {
    projectTitle: 'Multi-Post Stories Gain + Glory',
    description: 'Ruby on Rails',
    technologies: ['Ruby on Rails', 'css', 'javascript', 'html'],
  },
  {
    projectTitle: 'Multi-Post Stories Gain + Glory',
    description: 'Ruby on Rails',
    technologies: ['Ruby on Rails', 'css', 'javascript', 'html'],
  },
];
document.querySelector('.allprojects-container').innerHTML = projectCard.map((data) => `
<div class="project-container-card">
<div class="project-image"></div>
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
        <li class="tech-list">
            <p class="tech-name">${data.technologies[3]}</p>
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
document.querySelectorAll('.close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((modal) => { modal.style.display = 'none'; });
  });
});

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
document.querySelector('.form-control1').value = nonJsonForm.name;
document.querySelector('.form-control2').value = nonJsonForm.email;
document.querySelector('.form-control3').value = nonJsonForm.textArea;