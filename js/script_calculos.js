const calculoDesconto = (objPessoa) =>{
    let resposta = ''
    if ((objPessoa.idade< 18)||(objPessoa.renda<=1700)){
        resposta = 'Insento de Desconto'

    }else if((objPessoa.renda=>1701)&&(objPessoa.renda<=5000)){
        resposta = objPessoa.renda * objPessoa 0.05

    }else if((objPessoa.renda=>5001)&&(objPessoa.renda<=8000)){
        resposta = objPessoa.renda * objPessoa 0.08

    }else if((objPessoa.renda=>8001)&&(objPessoa.renda<=10000)){
        resposta = objPessoa.renda * objPessoa 0.10
    }else{
        resposta = objPessoa.renda * objPessoa 0.10
    }

    return resposta

}

export{calculoDesconto}