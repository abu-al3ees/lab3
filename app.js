var number_3 = prompt('Enter your FIRST number for calculate');
var number_2 = prompt('Enter your SECEND number for calculate');
var sign =prompt('Enter your sign only + / * - we using validation here ^_^');


while(sign!=='+' && sign!=='*' && sign!=='/'&& sign!=='-'){
  sign = prompt('plz your sign must be  only +  *  / -');
}
if(sign=='+'){
sum();
}else if(sign=='*'){
multi();
}
else if(sign=='/'){
div();
}
else if(sign=='-'){
    sub();
}
function div(n,n1){
    var div=number_3 / number_2;
 alert('your division ='+div);
}
function sub(n,n1){
    var sub = parseInt (number_3) -parseInt( number_2) ;
  alert('your subtract ='+sub);
}


function sum(n,n1){
    var sum=parseInt(number_3) + parseInt(number_2);
    alert('your sum ='+sum);
}
function multi(n,n1){
    var multi=number_3 * number_2;
  alert('your multi ='+multi);
}

    var iteration=prompt('how many number would like to Enter for the average?');
    var number=0;
var sum=0;



    for(var i=0;i<iteration;i++){
     number=prompt('enter you number');
     sum=(parseInt(sum)+parseInt(number));

    }
    function avg(){
var avg=sum/iteration;
alert('your average=  '+avg+' '+  ' your sum ='+sum);
    }
    avg();