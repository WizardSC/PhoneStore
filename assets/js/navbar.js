const login=document.querySelector(".login")
const user=document.querySelector(".user")

console.log(login)
console.log(user)

login.addEventListener('click',function(e){
    e.preventDefault()
    if(login.classList.contains('active1')){
        user.classList.add('active1')
    }
})





