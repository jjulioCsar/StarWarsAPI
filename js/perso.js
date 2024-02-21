document.addEventListener('DOMContentLoaded', ()=>{
    const urlParam = new URLSearchParams(window.location.search)
    // console.log(urlParam.get('index'))
    const paramIndex = urlParam.get('index')
 
    const url = `https://swapi.dev/api/people/${Number(paramINdex)+1}`
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error ('Erro de rede: Código'+repsopnse.status)
        }
        return response.json
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.log(err))

    function personagem(item){
        const personagemImg = document.querySelector('.personagem-img')
        const nome = document.querySelector('.nome')
        const altura = document.querySelector('.altura')
        const peso = document.querySelector('.peso')
        const genero = document.querySelector('.genero')
        const cor_cabelo = document.querySelector('cor_cabelo')
        const cor_olho = document.querySelector('.cor_olho')
        const cor_pele = document.querySelector('.cor_pele')
        const data_nascimento = document.querySelector('.data_nascimento')

        personagemImg.src = `../image/perso${paramIndex}.png`
        nome.innerHTML = `Nome : ${item.name}`
        altura.innerHTML = `Altura :${item.height}cm`
        peso.innerHTML = `Peso :${item.mass}kg`
        genero.innerHTML = `Genero :${item.gender}`
        cor_cabelo.innerHTML = `Cor do cabelo :${item.hair_color}`
        cor_olho.innerHTML = `Cor dos olhos:${item.eye_color}`
        cor_pele.innerHTML = `Cor de pele :${item.skin_color}`
        data_nascimento.innerHTML = `Data Aniversario :${item.birth.year}`
    }
})