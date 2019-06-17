// Default cat
$("#services-container").load("include/corps.html");

// Filter services
let buttons = document.querySelectorAll('.link-no-deco')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    $("#services-container").load("include/"+button.getAttribute('data-service')+".html");
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
