let my_string = "aAb1B2cC34oOp"
function solution(my_string) {
    let answer =0;
    for ( let i=0; i<my_string.length; i++ ) {
        if ( Number(my_string[i]) <=9) {
            answer += Number(my_string[i])
        }
    }
    return answer;
}

