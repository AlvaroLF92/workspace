
//DECLARACION DE CLASES

const Rectangulo = class R {

}

// clases declaradas con class no tienen hoisting¡
class Rectangulo2 {

}


// HOISTING------
// Y esto es cuando tomamos variables definidas con var
// y funciones definidas con function
// y las lleva al comienzo del archivo


// console.log(Cuadrado);
function Cuadrado() { }
// console.log(Rectangulo, Cuadrado);

const r = new Rectangulo()






class Chancho {
	propiedad = 'mi propiedad'
	#hambre
	static estatico = 42 
	constructor(estado = 'feliz' , hambre = false) {
		this.estado = estado
		this.#hambre = hambre
	}

	hablar() {
		console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre¡' : 'satisfecho'}`);
	}


	//Static methods are called directly on the class,without creating an instance/object of the class.// 
	static comer() {
		console.log(this.estatico,'estoy comiendo');
	}

}

Chancho.comer()
const feliz = new Chancho('feliz')
// console.log(feliz.__proto__);
// feliz.hablar();
// console.log(feliz);
const triste = new Chancho('triste')
// triste.hablar()
const nose = new Chancho()
// nose.hablar()