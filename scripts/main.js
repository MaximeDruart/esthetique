let buttons = document.querySelectorAll('.link-no-deco')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    $("#services-container").load("include/"+button.getAttribute('data-service')+".html"); 
  })
})
