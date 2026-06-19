//DECLARAR UM ARRAY DE OBJETOS PESSOA 
const pessoas = []

// PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#formulario')
//const formPessoa = document.querySelector('#div-form')
const divPessoa = document.querySelector('#div-lista-pessoas')

//CAPTURANDO EVENTO DO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const form_pessoa = newFormData(formPessoa)

    let nome = (form_pessoa.get('nome'))
    let idade = (form_pessoa.get('idade'))
    let renda = (form_pessoa.get('renda'))

})