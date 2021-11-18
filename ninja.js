class Ninja {
    constructor(nombre){
        this.salud=100;
        this.nombre=nombre;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log(this.nombre)
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud ${this.salud}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}`)
    }

    drinkSake(){
        this.salud+=10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.salud=200;
        this.fuerza=10;
        this.velocidad=10;
        this.sabiduria=10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();