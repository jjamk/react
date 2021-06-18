/*
[multiplyTwo, multiplyThree, addFour].reduce(
    function (prevFunc, nextFunc) {
        return function(value) {
            return nextFunc(prevFunc(value));
        }
    },
    function(k) { return k; }
);
*/

function compose(funcArr) {
    return funcArry.reduce(
        function (prevFunc,nextFunc) {
            return function(value) {
                return nextFunc(prevFunc(value));
            }
        },
        function(k) {return k;}
    );
}

const formulaWithCompose = compose([multiplyTwo, multiplyThree, addFour]);