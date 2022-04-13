// Get Element
const search = document.querySelector('.icon-search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

// Add Event
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})