import {calculoDesconto} from './script_calculos.js'

//DECLARAR UM ARRAY DE OBJETOS PESSOA 
const pessoa = []

// PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#formulario')
const divPessoa = document.querySelector('#div-lista-pessoas')

//CAPTURANDO EVENTO DO SUBMIT DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const form_pessoa = new FormData(formPessoa)


    const pessoa = {
        nome: (form_pessoa.get('nome')),
        idade: (form_pessoa.get('idade')),
        renda: (form_pessoa.get('renda'))
    }

    addPessoa(pessoa)
    //LIMPANDO O FORMULÁRIO
    formPessoa.reset()

})

//FUNÇÕES PARA CRUD
//FUNÇÃO PARA ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    pessoa.push(objPessoa)
    console.log(objPessoa)

    listPessoa()
}

//FUNÇÃO PARA LISTAR PESSOAS

const listPessoa = () => {
    //PERCORRENDO O ARRAY COM A ESTRUTURA DE REPETICA foreech
    pessoa.forEach((elem, i)=>{
        divPessoa.innerHTML += `<div class= 'item-pessoa'>${i + 1} - ${elem.nome} ${elem.idade} R$ 
        ${parseFloat(elem.renda).toFixed(2).replace('.', ',')} ${calculoDesconto(elem)}</div>` 
    })
}