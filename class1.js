class Car {
    constructor(name) {
        this.name = name
    }
    static hello() {
        return 'heyyy';
    }
    present(x) {
        return x + 'I have ' + this.name;
    }
}

class Model extends Car {
    constructor(name, brand) {
        super(name)
        this.brand = brand;
    }
    show() {
        return this.present('hi ') + '. It\'s model name is ' + this.brand;
    }
}

myCar = new Car(1, 'Ford');
myCar2 = new Model('Ford', 'Mustang');

console.log(Car.hello())
console.log(myCar2.show())