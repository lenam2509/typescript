var coca = {
    name: 'coca',
    color: 'black',
    sugar: 10,
    sumary: function () {
        return "drink ".concat(this.name, " has ").concat(this.sugar, " sugar");
    }
};
var pepsi = {
    name: 'pepsi',
    color: 'black',
    sugar: 20,
    sumary: function () {
        return "drink ".concat(this.name, " has ").concat(this.sugar, " sugar");
    }
};
console.log(coca.sumary());
console.log(pepsi.sumary());
