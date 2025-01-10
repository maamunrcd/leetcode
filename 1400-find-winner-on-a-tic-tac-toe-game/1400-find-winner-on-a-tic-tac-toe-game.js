/**
 * @param {number[][]} moves
 * @return {string}
 */
function containsArray(arr, target) {
  return arr.some(subArr => 
    subArr.length === target.length && subArr.every((val, index) => val === target[index])
  );
}
var tictactoe = function(moves) {
    let winnderDraw = [
    // Horizontal Wins
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    // Vertical Wins
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    // Diagonal Wins
    [[0,0], [1,1], [2,2]],
    [[2,0], [1,1], [0,2]]
];

    
    let a = [];
    let b = [];
    for(let i = 0; i < moves.length; i++){
        if(i % 2 === 0){
            a.push(moves[i]);
        } else {
            b.push(moves[i]);
        }
    }
    for(let i = 0; i < winnderDraw.length; i++){
        let aCount = 0;
        let bCount = 0;
        for(let j = 0; j < winnderDraw[i].length; j++){
            if(containsArray(a, winnderDraw[i][j])){
                aCount += 1;

            } else if(containsArray(b, winnderDraw[i][j])){
                bCount += 1;
            }
        }
        if(aCount === 3){
            return "A";
        }
        if(bCount === 3){
            return "B";
        }
    }
    if(moves.length === 9 ){
        return "Draw";
    } 
    return "Pending";
    
};