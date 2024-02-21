import data from '../data.json' assert{'type':'json'};

console.log(data)

const btn = document.querySelector('#login')
btn.addEventListener('click', (event)=>{
    event.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById ('password').value

    const login = data.find((obj)=>obj.usuario === user && obj.senha === password)
    
    if(login){
        window.location = '../index.html'
    }else{
        alert('Usuario nao encontrado')
    }

    console.log(user, password)
})