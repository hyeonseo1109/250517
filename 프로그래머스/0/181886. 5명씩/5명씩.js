names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

function solution(names) {
    let answer = [];
    for( let i=0; i<names.length; i+=5) {
    answer.push( names[i] );
    }
    return answer;
}

