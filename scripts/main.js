// Default cat

window.onload = function(){
  $("#services-container").load("include/corps.html");
  buttons[0].classList.add('active')
}

// Filter services
let buttons = document.querySelectorAll('li a.link-no-deco')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach(button =>{
      button.classList.remove('active')
    })
    button.classList.add('active')

    TweenMax.set('#services-container', {opacity:0})
    $("#services-container").load("include/"+button.getAttribute('data-service')+".html");
    TweenMax.to('#services-container', 0.6, {opacity:1})
  })
})

// Dropdown
// let navTrigger = document.querySelector('#navTrigger')
// let navDropdown = document.querySelector('#navDropdown')
// let triggerStyle = getComputedStyle(navTrigger)
// navTrigger.addEventListener('click', () => {
//     navDropdown.classList.toggle("dropdown_active")
// })
// navDropdown.addEventListener('click', () => {
//   if (triggerStyle.display != "none") {
//     navDropdown.classList.toggle("dropdown_active")
//   }
// })

let hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
})
