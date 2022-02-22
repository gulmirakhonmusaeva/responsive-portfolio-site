

window.addEventListener('DOMContentLoaded', function() {

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')
const navItems = document.querySelectorAll('.navigation-link')

menuBtn.addEventListener('click' , () => {
  menuBtn.classList.toggle('active')
  navigation .classList.toggle('active')
})

navItems.forEach(navItem => {
  navItem.addEventListener('click' , ()=> {
    menuBtn.classList.remove('active')
    navigation .classList.remove('active')
  })
})

const scrolltoTopBtn = document.querySelector('.scrolltoTop-btn')

window.addEventListener('scroll', () => {
  scrolltoTopBtn.classList.toggle('active' , window.scrollY > 500)
})

scrolltoTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0 ;
  document.scrollingElement.scrollTop = 0;
})

window.addEventListener('scroll' , () => {
  let reveals = document.querySelectorAll('.reveal')

  for(let i = 0 ; i < reveals.length ; i++) {
    let windoowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    console.log(revealTop);
    let revealPoint = 50;

    if (revealTop < windoowHeight - revealPoint) {
      reveals[i].classList.add('active')
    }
  }
})



  let typed = new Typed('#words', {
   
    strings: ['Akhror, Soliev'],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 100,
    smartBackspace: true,
    loop: true,
  });







})

