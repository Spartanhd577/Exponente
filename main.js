//factorial
/* 
 var n= prompt("numero","");
var fact = 1;
 for(var i= 1; i<=n; i++){

   document.write(fact + "x" + i +"=");

  fact= fact * i;
document.write(fact); 
 }

 var powed = function(base, exponente){
   var result=base;
   if (exponente===1){
     return result ;
   }else if (exponente===0){
     return 1;
   }else{
     result*= powed(base, exponente-1);
   }
   return result;

 }*/
 
var base=2;
var exponente=4;
var result=base
if (exponente===0){
  console.log(1);
}else{
  while (exponente > 1){
    result*=base;
    exponente-=1;
  }
  console.log(result);
}
