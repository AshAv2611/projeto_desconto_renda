//DECLARAR UM ARRAY DE OBJETOS PESSOA 
const pessoas = []

// PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#formulario')
//const formPessoa = document.querySelector('#div-form')
const divPessoa = document.querySelector('#div-lista-pessoas')

//CAPTURANDO EVENTO DO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_pessoa = newFormData(formPessoa)


    const pessoas = {
        nome = (form_pessoa.get('nome')),
        idade = (form_pessoa.get('idade')),
        renda = (form_pessoa.get('renda'))
    }

    
})