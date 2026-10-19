class MinStack {
    constructor() {
        this.items = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.items.length === 0) {
            this.minStack.push(val);
        }else if (val <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(val);
        }
        this.items.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.items[this.items.length - 1] === this.minStack[this.minStack.length - 1]){
            this.minStack.pop();
        }
        this.items.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}