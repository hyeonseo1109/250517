num_list = [];
function solution(num_list) {
    let mul = 1;
    let plus = 0;
    for ( const num of num_list ) {
        mul *= num;
        plus += num;
    }
    return mul > plus**2 ? 0 : 1;
}