const vhSize = window.innerHeight-100;

const welcome = document.getElementById('buttonWel');
const skills = document.getElementById('buttonSki');
const repositories = document.getElementById('buttonRep');

window.addEventListener('scroll', () => {
  if (window.pageYOffset < vhSize){
    welcome.classList.add('buttonBar');
    skills.classList.remove('buttonBar');
    repositories.classList.remove('buttonBar');
  }else if(window.pageYOffset < vhSize*2){
    skills.classList.add('buttonBar');
    repositories.classList.remove('buttonBar');
    welcome.classList.remove('buttonBar');
  }else{
    repositories.classList.add('buttonBar');
    welcome.classList.remove('buttonBar');
    skills.classList.remove('buttonBar');
  }
})
