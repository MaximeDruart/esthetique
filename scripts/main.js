let menu = document.querySelector('.menu')
menu.addEventListener('click', (event) => {
  TweenMax.set('.sandwich-overlay', {display:'block'})
  TweenMax.to('.sandwich-overlay', 0.6, {opacity:1})
  console.log('click')
})
