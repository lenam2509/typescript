interface drink {
    name: string;
    color: string;
    sugar: number;

    sumary(): string;
}

let coca:drink = {
    name: 'coca',
    color: 'black',
    sugar: 10,
    sumary: function () {
        return `drink ${this.name} has ${this.sugar} sugar`;
    }
}

let pepsi:drink = {
    name: 'pepsi',
    color: 'black',
    sugar: 20,
    sumary: function () {
        return `drink ${this.name} has ${this.sugar} sugar`;
    }
}

console.log(coca.sumary());  
console.log(pepsi.sumary());
