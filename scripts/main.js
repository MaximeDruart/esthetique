let buttons = document.querySelectorAll('.link-no-deco')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    itemGen(button.getAttribute('data-service'))
  })
})
