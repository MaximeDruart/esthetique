// Default cat

window.onload = function(){
  $("#services-container").load("include/corps.html");
  buttons[0].classList.add('active')
}

// Filter services
let buttons = document.querySelectorAll('li a.link-no-deco')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach(button => {
      button.classList.remove('active')
    })
    button.classList.add('active')
    overlay.style.display == "block" ? (tlOverlay.reverse(), hamburger.classList.toggle('is-active')) : ""
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


let overlay = document.querySelector('.overlay')
let hamburger = document.querySelector('.hamburger')
let tlOverlay = new TimelineMax({paused:true})
tlOverlay.set(overlay, {display:"block"})
tlOverlay.to(overlay, 0.3, {ease:"easeInOut", opacity:1})
hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('is-active')
  hamburger.classList.contains('is-active') ? tlOverlay.play() : tlOverlay.reverse()
})
