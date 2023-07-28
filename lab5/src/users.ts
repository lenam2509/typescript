export interface UserProps{ 
    name?: string;
    age?: number;
    address?: string;
    phone?: number;
    gmail?: string;
    job?: string;
    email?: string;
  }

  type Callback= () => void;

  export class User { 
    events: { [key: string]: Callback[] } = {};
    constructor(private data: UserProps) {
      this.data = data;
      // console.log(this.data);
    };
    get(propName:string):string|number {
      return this.data[propName];
    }
    set(update: UserProps): void {
      Object.assign(this.data, update);
    }
    on(eventName: string,callback: Callback):void {
      const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }
    trigger(eventName:string):void {
      const handlers = this.events[eventName];
      if (!handlers || handlers.length === 0) {
        return;
      }
      handlers.forEach(callback => {
        callback();
      });
    }
  }