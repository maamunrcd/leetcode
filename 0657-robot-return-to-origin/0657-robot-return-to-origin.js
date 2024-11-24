/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let updown, leftright;
    updown = 0;
    leftright = 0;
    for(let char of moves){
        if(char === "U"){
            updown+=1;
        } else if(char === "D"){
            updown-=1;
        } else if(char === "L"){
            leftright+=1;
        } else {
            leftright-=1;
        }
    }
    return updown === 0 && leftright === 0; 
};