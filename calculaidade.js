function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade +anos} anos de idade.`
}
const pessoa = {
    nome:'Denis',
    idade:30
}
console.log(calculaIdade.call(pessoa,40))
console.log(calculaIdade.apply(pessoa,[40]))