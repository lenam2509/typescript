class Department {
    name: string;
    constructor(n:string){
        this.name = n
    }
    describe(){
        console.log('Department:',this.name);
    }
}

const pb = new Department('Ke Toan');

pb.describe()

class cv extends Department{
    daywork:number;
    salary:number;
    constructor(n:string,daywork:number,salary:number){
        super(n);
        this.daywork = daywork;
        this.salary = salary;
    }
    hamTinhluong(){
        console.log('Luong:',this.salary * this.daywork);
    }
}

const cv1 = new cv('Ke Toan',30,50000);
console.log(cv1.hamTinhluong());

const concv = {name:'Giam Doc', mota: pb.describe()}
console.log(concv); // { name: 'Giam Doc', mota: undefined }