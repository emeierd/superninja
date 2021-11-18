class Vehicle {
    constructor(manufacturer,model,color){
        this.miles=0;
        this.manufacturer=manufacturer;
        this.model=model;
        this.color=color;
    }

    drive() {
        this.miles+=10;
    }
}

class M5 extends Vehicle {
    constructor(color){
        super("BMW","M5",color)
        this.hp = 616;
    }

    printSpecSummary() {
        console.log(`BMW M5 with a 4.4L Twin Turbo V8 engine packin ${this.hp}HP and 553lb-ft TQ`)
    }
}

let auto1 = new Vehicle("BMW","M5","Yellow")
auto1.drive();
console.log(auto1.manufacturer,auto1.miles)

let auto2 = new M5("Blue");
console.log(auto2.color)
auto2.printSpecSummary();
auto2.drive();
console.log(auto2.miles);