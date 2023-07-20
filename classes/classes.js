var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department:', this.name);
    };
    return Department;
}());
var pb = new Department('Ke Toan');
pb.describe();
var cv = /** @class */ (function (_super) {
    __extends(cv, _super);
    function cv(n, daywork, salary) {
        var _this = _super.call(this, n) || this;
        _this.daywork = daywork;
        _this.salary = salary;
        return _this;
    }
    cv.prototype.hamTinhluong = function () {
        console.log('Luong:', this.salary * this.daywork);
    };
    return cv;
}(Department));
var cv1 = new cv('Ke Toan', 30, 50000);
console.log(cv1.hamTinhluong());
var concv = { name: 'Giam Doc', mota: pb.describe() };
console.log(concv);
