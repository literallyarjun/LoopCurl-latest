const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  console.log("hai")
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

// const sem1=document.getElementsByClassName('sem1')
// const search=document.getElementById('search')

// search.addEventListener('click', () => {
//   // sem1.style.display="none"
//   console.log("hai");
// })