var number = prompt('enter yourfirst number');
var number_2 = prompt('enter your second number');
var sign =prompt('enter your sign only + and *');


if(sign=='+'){
sum();
}else if(sign=='*'){
multi();
}



function sum(n,n1){
    var sum=parseInt(number) + parseInt(number_2);
alert(sum) ;
}
function multi(n,n1){
    var multi=number * number_2;
alert(multi) ;
}