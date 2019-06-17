// Default cat
$("#services-container").load("include/corps.html");

// Filter services
let buttons = document.querySelectorAll('.link-no-deco')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
<<<<<<< HEAD
    TweenMax.set('#services-container', {opacity:0})
    $("#services-container").load("include/"+button.getAttribute('data-service')+".html");
    TweenMax.to('#services-container', {opacity:1})
=======
    tweenMax.set('#services-container', {opacity:0})
    $("#services-container").load("include/"+button.getAttribute('data-service')+".html");
    tweenMax.to('#services-container', {opacity:1})
>>>>>>> ef868994048a8301bb5d158b59fdbba126542d7e
  })
})

// Dropdown
let navTrigger = document.querySelector('#navTrigger')
let navDropdown = document.querySelector('#navDropdown')
navTrigger.addEventListener('click', () => {
  navDropdown.classList.toggle("dropdown_active")
})
navDropdown.addEventListener('click', () => {
  navDropdown.classList.toggle("dropdown_active")
})
