class Task {
    id: number;
    name: string;
    status: string;
    constructor(id:number,name:string,status:string) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
     show():void{
        console.log(`${this.id} - ${this.name} - ${this.status}`);
     }
}


let task1 = new Task(1,'coding','done');

task1.show();



class SubTask extends Task {
  
    show(): void {
        super.show();
    }

}

let subtask1 = new SubTask(2,'sleeping','done');

subtask1.show();

