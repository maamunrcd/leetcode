
var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length == 0 || val < this.stack[this.minStack[this.minStack.length - 1]]){
        this.minStack.push(this.stack.length-1);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length == 0){
        return;
    }
    if(this.stack.length - 1 === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length == 0) return;
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minStack.length == 0) return;
    return this.stack[this.minStack[this.minStack.length - 1]];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */