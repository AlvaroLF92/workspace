// funciones que se DECLARAN con la palabra reservada function,tienen contexto de 'this' y funcionan como clases en JS.//
function Fn() {
    //{ prop: 'propiedad' }
    //
    this.prop = 'propiedad'
    //return 'chanchito feliz'
}
Fn.prototype.lala = function funcionDePrototipo() {}

const r = new Fn()
// console.log(r.__proto__);
// console.log(r);



//FAT ARROW FUNCTION

const fatfn = () => {
    return 'chanchito feliz'
    // this.prop = 'propiedad'
}
// const r1 = new fatfn()  Esta línea de codigo arrojará error debido a que solo las function normales pueden ser llamadas con la palabra reservada 'new'. Las fat arrow function no tienen contexto de this ni pueden implementar herencia basada en prototipos.
console.log(fatfn());

