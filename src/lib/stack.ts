export class Stack{
    private stack: string[];

    constructor() {
        this.stack = [];
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
    pop() {
        if(this.isEmpty()) throw new Error("Underflow Exception")
        return this
            .stack
            .pop()!;
    }

    push(value: string) {
        return this
            .stack
            .push(value)
    }
    
    top() {
        if(this.isEmpty()) throw new Error("Underflow Exception")
        return this.stack[this.stack.length - 1];
    }

}