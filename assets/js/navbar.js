const navbarLogin=document.querySelector(".login")
const navbarUser=document.querySelector(".user")

console.log(navbarLogin)
console.log(navbarUser)

navbarLogin.addEventListener('click',function(e){
    e.preventDefault()
    if(navbarLogin.classList.contains('active1')){
        navbarUser.classList.add('active1')
        navbarLogin.classList.remove('active1')
    }
})

const navbarLogin1=document.querySelector(".login1")
const navbarUser1=document.querySelector(".user1")

console.log(navbarLogin1)
console.log(navbarUser1)

navbarLogin1.addEventListener('click',function(e){
    e.preventDefault()
    if(navbarLogin1.classList.contains('active2')){
        navbarUser1.classList.add('active2')
        navbarLogin1.remove('active2')
    }
})








