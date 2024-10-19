/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const result = [];
    const operators = ['+', '-', '*', '/'];

    for(const char of tokens){
        let op1, op2;
        if(operators.includes(char)){
            op2 = result.pop();
            op1 = result.pop();
        }
        switch(char) {
            case '+':
             result.push(op1 + op2);
             break;
            case '-':
              result.push(op1 - op2);
              break;
            case '*':
              result.push(op1 * op2);
              break;
            case '/':
              result.push(Math.trunc(op1 / op2));
              break;
            default:
                result.push(+char);
        }
    }
    return result.pop();
};