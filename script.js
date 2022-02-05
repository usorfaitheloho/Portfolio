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

//Project section dynamic load and pop-up window implementation

const projectDatas = [
	{
		projectTitle: 'Keeping track of hundred of components',
		description:     
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
		featuredImage: './images/SnapshootPortfolio.png',
		technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
		liveVersion: 'See Live',
		source: 'See source',
	},
  {
		projectTitle: 'Keeping track of hundred of components',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    	featuredImage: './images/SnapshootPortfolio.png',
		technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
		liveVersion: 'See Live',
		source: 'See source',
	},
	{
		projectTitle: 'Keeping track of hundred of components',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
		featuredImage: "./images/SnapshootPortfolio.png",
		technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
		liveVersion: 'See Live',
		source: 'See source',
	},
	{
		projectTitle: 'Keeping track of hundred of components',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
		featuredImage: "./images/SnapshootPortfolio.png",
		technologies: ['html', 'css', 'javascript'],
    liveVersionImage: ['./images/seeLiveIcon.png'],
    sourceImage: ['./images/Vector.png'],
		liveVersion: 'See Live',
		source: 'See source',
	},
]

document.querySelector('.modals').innerHTML = 
projectDatas.map(data => `
<div class="modal">
<div class="modal-container">
  <div class="modal-wrapper">
    <div class="close">	<i class="fa fa-times fa-1x"></i></div>
  <div class="project-image">
    <img src= ${data.featuredImage}
        alt="Project Image 1"
         />
   </div>
<div class="modal-project-desc-tech-details">
    <h4 class="project-title"> ${data.projectTitle}
      </h4>
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
     <p class="modal-text-content">${data.description}</p> 
    <div class="modal-buttons">
    <button class="btn btn-projects-live" type="button">${data.liveVersion}<img src= ${data.liveVersionImage} /></button>
    <button class="btn btn-projects-source" type="button">${data.source}<img src= ${data.sourceImage} /></button>
    </div>
</div>
</div>
</div>
</div>`
)

// event listeners for opening modal on button click
let modalButtons = Array.from(document.querySelectorAll('.btn'));
let modals = Array.from(document.querySelectorAll('.modal'));


let modalButtonZip = modalButtons.map((button, i) => {
  	console.log([button, modals[i]]);
  	return [button, modals[i]];
});

modalButtonZip.forEach(pair => {
	pair[0].addEventListener('click', () => (pair[1].style.display = 'block'));
});

// event listener for closing modal on button click
document.querySelectorAll('.close').forEach(close => {
	close.addEventListener('click', () => {
		document.querySelectorAll('.modal').forEach(modal => (modal.style.display = 'none'));
	});
});

// form validation
const email = document.getElementById('email');
const error = document.getElementById('warning');
const form = document.getElementById('signup');

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