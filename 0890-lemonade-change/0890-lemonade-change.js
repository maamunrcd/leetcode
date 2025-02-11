/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    for(let n of bills){
        if(n == 5){
            five+=1;
        }
        if(n == 10){
            ten+=1;
        }
        let change = n - 5;
        if(change === 5){
            if(five > 0){
                five-=1;
            } else {
                return false;
            }
        } else if(change === 15){
            if(five > 0 && ten > 0){
                five-=1;
                ten-=1;
            } else if(five >= 3){
                five-=3;
            } else {
                return false;
            }
        }
    }
    return true;
};