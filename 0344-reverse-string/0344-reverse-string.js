/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length <=1) return s;
     let l, r;
     l =0;
     r = s.length-1;
     while(l <= r){
        let dump = s[l];
        s[l] = s[r]
        s[r] = dump;
        l++;
        r--;
     }
     return s;
};