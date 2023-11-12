const login=document.querySelector(".login")
const user=document.querySelector(".user")

console.log(login)
console.log(user)

login.addEventListener('click',function(e){
    e.preventDefault()
    if(login.classList.contains('active1')){
        user.classList.add('active1')
        login.classList.remove('active1')
    }
})

const login1=document.querySelector(".login1")
const user1=document.querySelector(".user1")

console.log(login1)
console.log(user1)

// login1.addEventListener('click',function(e){
//     e.preventDefault()
//     if(login1.classList.contains('active2')){
//         user1.classList.add('active2')
//         login1.remove('active2')
//     }
// })








