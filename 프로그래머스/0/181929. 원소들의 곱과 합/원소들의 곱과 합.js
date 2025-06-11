num_list = [];
function solution(num_list) {
    const plus = num_list.reduce((a, b) => {
        return a+b ;
    }, 0);
    const multiply = num_list.reduce( (a, b) => {
        return a*b;
    }, 1);
    return multiply > plus**2 ? 0 : 1;
}
solution(num_list);

