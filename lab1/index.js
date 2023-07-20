"use strict";
// bài 1
let str = 'hello world';
let num = 10;
let result = str + num;
console.log(result);
// bài 2
function add(x = 5) {
    let phrase = 0;
    phrase = 10;
    x = 2.8;
    return phrase + x; 
}
let resultAdd = add(3);
console.log(resultAdd);
// bài 3
const randomlist = [1, 'hello', true];
randomlist.push(2);
randomlist.push('world');
randomlist.push(false);
console.log(randomlist);
let person = {
    name: 'thanh',
    age: 20,
    hobbies: ['sport', 'cooking']
};
console.log(person);
// bài 5
function funcNoReturn() {
    console.log("Hello world");
}
function funcReturnNum() {
    return 1;
}
function funcReturnArray() {
    return ['1', '2', '3'];
}
function funcReturnAny() {
    console.log("object");
}
funcNoReturn();
funcReturnNum();
funcReturnArray();
funcReturnAny();
// bài 6
function userInfo1(name, age) {
    return `My name is ${name}, ${age} years old`;
}
function userInfo2(name, age) {
    console.log(`My name is ${name}, ${age} years old`);
}
userInfo1('thanh', 20);
userInfo2('thanh', 20);
// bài 7
function totalLength(x, y) {
    return x.length + y.length;
}
console.log(totalLength('abc', ['123'])); // 4
console.log(totalLength([1, 'abc', "def"], ['123', "sang"])); // 5
console.log(totalLength([1, 'abc', "def"], "123456")); // 9
// bài 8
function showStudentInfo(name, ...course) {
    return name + " study " + course.join(', ');
}
console.log(showStudentInfo("Sang", "typescript", "nodejs", 'javascript', 'html'));
