function multiply(a,b) {
    return a * b;
}

function multiplyX(x) {
    return function(a) {
        return multiply(a, x);
    }
}

//화살표 함수 표현식
//const multiplyX = x => a => multiply(a,x);

//함수 생성 예1
const multiplyThree = multiplyX(3);
const multiplyFour = multiply(4);

const result1 = multiplyThree(3); 
const result2 = multiplyFour(3);

//함수 생성 예2(funcion(a)인자에 바로 전달)
const result1 = multiplyX(3)(3);
const result2 = multiplyX(4)(3);