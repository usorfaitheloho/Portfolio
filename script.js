
let menuLinks = document.querySelectorAll('.menu_links');
let container = document.getElementsByClassName('toggle-menu')[0];
let icon =document.querySelector(".hamburger .fa-bars");
let logo = document.querySelector('.logo');

container.style.visibility = 'hidden';


function changeIcon() {
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");
    icon.style.position = 'absolute';
    logo.style.visibility = 'hidden';
    icon.style.right ='0';
    icon.style.marginRight = '24px';
    if(container.style.visibility === 'hidden'){
        container.style.visibility = 'visible';
    }
 else if (container.style.visibility = 'hidden'){
        container.style.visibility = 'hidden';
        logo.style.visibility = 'visible';
     }
    
}

function hideMenu (){
    container.style.visibility = 'hidden ' ;
    logo.style.visibility = 'visible';
    icon.classList.toggle("fa-times");
    icon.classList.toggle('fa-bars');
}