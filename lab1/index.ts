// bài 1
let str:string = 'hello world'
let num:number = 10
let result = str + num
console.log(result)

// bài 2
function add(x = 5 ) : number {
    let phrase = 0;

    phrase = 10;

    x = 2.8;

    return phrase + x;
}
let resultAdd: number = add(3);
console.log(resultAdd);

// bài 3
const randomlist:[number, string, boolean] = [1, 'hello', true]
randomlist.push(2)
randomlist.push('world')
randomlist.push(false)
console.log(randomlist)

// bài 4
interface Person {
    name: string;
    age: number;
    hobbies: string[];
}
let person: Person = {
    name: 'thanh',
    age: 20,
    hobbies: ['sport', 'cooking']
}
console.log(person)

// bài 5

function funcNoReturn(): void {
    console.log("Hello world");
}

function funcReturnNum(): number {
    return 1;
}

function funcReturnArray(): string[] {
    return ['1','2','3'];
}

function funcReturnAny(): any {
    console.log("object")
}

funcNoReturn();

funcReturnNum();

funcReturnArray();

funcReturnAny();

// bài 6
function userInfo1(name: string, age: number): string {
    return `My name is ${name}, ${age} years old`;
}

function userInfo2(name: string, age: number): void {
    console.log(`My name is ${name}, ${age} years old`);
}

userInfo1('thanh', 20);
userInfo2('thanh', 20);

// bài 7
function totalLength(x: (string | any[]), y: (string[] | string)): number {
    return x.length + y.length;
}

console.log(totalLength('abc', ['123'])); 
console.log(totalLength([1,'abc', "def"], ['123', "sang"])); 
console.log(totalLength([1,'abc', "def"], "123456")); 

// bài 8

function showStudentInfo(name: string, ...course: string[]) {
    return name + " study " + course.join(', ');
}

console.log(showStudentInfo("Sang", "typescript", "nodejs", 'javascript', 'html'));


