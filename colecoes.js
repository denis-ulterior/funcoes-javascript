function getAdmins(map){
    const admins = []
    for ([key,value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}
const usuarios = new Map()
usuarios.set('Denis','Admin')
usuarios.set('José','User')
usuarios.set('Maria','Admin')

console.log(getAdmins(usuarios))
const meuArray = [30,40,30,5,223,2000,5,4]
function valoresUnicos(arr){
    const mySet = new Set(arr)
    return[...mySet]
}
console.log(valoresUnicos(meuArray))