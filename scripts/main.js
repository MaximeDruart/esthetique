let buttons = document.querySelectorAll('.link-no-deco')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    itemGen(button.getAttribute('data-service'))
  })
})

function itemGen(attr) {
  let cont = document.querySelector('services-container')
  let div = document.createElement('div')
  div.setAttribute('include-html', attr)
  cont.appendChild(div)
}
