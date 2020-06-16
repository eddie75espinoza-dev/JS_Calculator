document.getElementById('num_0').addEventListener('click',num_0);
document.getElementById('num_1').addEventListener('click',num_1);
document.getElementById('num_2').addEventListener('click',num_2);
document.getElementById('num_3').addEventListener('click',num_3);
document.getElementById('num_4').addEventListener('click',num_4);
document.getElementById('num_5').addEventListener('click',num_5);
document.getElementById('num_6').addEventListener('click',num_6);
document.getElementById('num_7').addEventListener('click',num_7);
document.getElementById('num_8').addEventListener('click',num_8);
document.getElementById('num_9').addEventListener('click',num_9);
document.getElementById('clear').addEventListener('click',showReset);
document.getElementById('backer').addEventListener('click',backer);
document.getElementById('mod').addEventListener('click',oper1);
document.getElementById('dec').addEventListener('click',point);
document.getElementById('div').addEventListener('click',oper2);
document.getElementById('mult').addEventListener('click',oper3);
document.getElementById('minus').addEventListener('click',oper4);
document.getElementById('add').addEventListener('click',oper5);
document.getElementById('equal').addEventListener('click',result);

showReset();
// Numeros
function num_0() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_0').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_1() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_1').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_2() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_2').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_3() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_3').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_4() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_4').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_5() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_5').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_6() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_6').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_7() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_7').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_8() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_8').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function num_9() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('num_9').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}

// Operadores
function oper1() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('mod').innerHTML;
    console.log(increm);
    document.getElementById('show').innerHTML = number_1 + increm
}
function oper2() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('div').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function oper3() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('mult').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function oper4() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('minus').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function oper5() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('add').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function backer() {
    let exp = document.getElementById('show').innerHTML;
    document.getElementById('show').innerHTML = exp.substring(0,exp.length -1);
}
function point() {
    let number_1 = document.getElementById('show').innerHTML;
    let increm = document.getElementById('dec').innerHTML;
    document.getElementById('show').innerHTML = number_1 + increm
}
function showReset() {
    document.getElementById('show').innerHTML = ""
    number_1 = 0;
}
function result() {
    var exp = document.getElementById('show').innerHTML;
    try{
        document.getElementById('show').innerHTML = eval(exp);
        exp = 0;
    }catch (error){
        document.getElementById('show').innerHTML = "Error";        
    }
}
