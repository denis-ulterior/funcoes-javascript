function testArray(arr, n) {
    try {
        if (arr == undefined || n == undefined)
            throw new ReferenceError('Envie um array e seu tamanho')

        if ((!(arr instanceof Array)) || typeof n !== 'number')
            throw new TypeError('Argumentos não correspondem a Array e number respectivamente')

        if(arr.length != n)
            throw new RangeError('Tamanho informado não confere ao Array')

        return arr
    } catch (e) {
        console.log(e.message)
    }
    return []

}
console.log(testArray([1],2))