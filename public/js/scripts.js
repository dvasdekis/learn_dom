/* Assign the HTML button element with id of 'changeBackground' to a JS variable */
let mybutton = document.getElementById('changeBackground')

/* Tell the button to listen for a click, and do something when clicked */
mybutton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'fuchsia'
})
