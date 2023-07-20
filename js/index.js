const dropdown = document.querySelector('.dropdown')
const explore = document.querySelector(".explore")

explore.addEventListener('click', (e)=>{
    e.preventDefault
    dropdown.classList.toggle('down')
})

// console.log(dropdown)
// console.log(explore)