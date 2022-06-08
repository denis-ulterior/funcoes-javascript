//Função exemplo de conceitos de programação 
//Autor: Denis Souza
function aprovados(alunos, mediaAlvo,materia='javascript') {
    //array para receber os aprovados do processamento
    const aprovados = []
    //percorre o array recebido
    for (let aluno of alunos) {
        //obtem o nome por destructuring
        const {nome} = aluno
        //verifica se existe o objeto materia passado
        if(typeof(aluno[materia]) == 'object'){
            //utilizado var por ter escopo de funcao
            //faz a tentativa de obter a nota1 e nota2
            try{
                var{nota1,nota2} = aluno[materia]
            }catch{
                var nota1,nota2=0
            }
            
        }else{
            //caso nao exista a materia o valor é 0
            var nota1,nota2=0
        }
            //realiza o calculo e coloca no array
        if((nota1 +nota2)/2 >=mediaAlvo){
            aprovados.push({
                aluno:nome,
                media:((nota1+nota2)/2)
            })
        }
    }
    return aprovados
}
    let aluno1 = {
        nome: 'Denis',
        nascimento: '1991',
        javascript: {
            nota1: 10,
            nota2: 9
        },
        java:{
            nota1: 10,
            nota2: 9
        }
    }
    let aluno2 = {
        nome: 'Joaozinho',
        nascimento: '1995',
        javascript: {
            nota3: 6,
            nota2: 7
        },
        java:{
            nota1: 10,
            nota2: 9
        }
    }
    let aluno3 = {
        nome: 'Josézinho',
        nascimento: '1995',
        javascript: {
            nota1: 3,
            nota2: 7
        },
        java:{
            nota1: 10,
            nota2: 9
        }
    }
    const alunos = []
    alunos.push(aluno1)
    alunos.push(aluno2)
    alunos.push(aluno3)
    console.log(aprovados(alunos, 6,'javascript'))
