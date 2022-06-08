const maca = {
    value: 2,
}
const banana = {
    value: 1
}
arr = [1, 2, 4, 5]

function mapComThis(arr, obj) {
    return arr.map(function (item) {
        return item * this.value
    }, obj)
}


function mapComThisArrow(arr, obj) {
    return arr.map(((item) => {
        return item * obj.value
    }).bind(this))
}

console.log(mapComThisArrow(arr, maca))
console.log(mapComThis(arr, maca))

console.log(mapComThisArrow(arr, banana))
console.log(mapComThis(arr, banana))


const duplica = (arr) => arr.map((item) => console.log(item * 2))
const impar = (arr) => console.log(arr.filter((item) => !(item % 2 == 0)))
const somarTudo = (arr) => console.log(arr.reduce((acumulador, atual) => acumulador + atual))
const descontar = (arr, inicial) => console.log(arr.reduce((acumulador, atual) => acumulador - atual, inicial))

duplica(arr)
impar(arr)
somarTudo(arr)

const produtos = [
    {
        nome: 'teclado',
        preco: 22
    }, {
        nome: 'mouse',
        preco: 12.99
    }]

descontar(produtos.map(item => item.preco), 50)