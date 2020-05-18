function p(){

var s1=document.getElementById('s').value;
var s2=document.getElementById('ss').value;
var s3=document.getElementById('sss').value;
var s4=document.getElementById('ssss').value;
var s5=document.getElementById('sssss').value;
var s6=document.getElementById('sssss').value;
var s1=parseInt(s1);
var s2=parseInt(s2);
var s3=parseInt(s3);
var s4=parseInt(s4);
var s5=parseInt(s5);
var s6=parseInt(s6);

 if( isNaN() && s1>100 ){
alert("Telugu Marks between 0 to 100");
  return false;
}
else if(isNaN() && s2>100){
  alert("Hindi Marks between 0 to 100");
  return false;
}
else if(isNaN() && s3>100){
  alert("English Marks between 0 to 100");
  return false;
}
else if(isNaN() && s4>100){
  alert("Maths Marks between 0 to 100");
  return false;
}
else if(isNaN() && s5>100){
  alert("Science Marks between 0 to 100");
  return false;
}
else if(isNaN() && s6>100){
  alert("Social Marks between 0 to 100");
  return false;
}
var total=s1+s2+s3+s4+s5+s6;
var per=(total/600)*100;
document.getElementById('d1').value=total ;
document.getElementById('d2').value=per ;
if (per >35) {
  document.getElementById('d3').value="Pass" ;

}
else{
  document.getElementById('d3').value="Fail" ;
}

if (per > 35 && per<50) {
  document.getElementById('d4').value="C";
  }
  else if (per >50 && per<75) {
document.getElementById('d4').value="B"  ;
  }
  else if (per >75){
    document.getElementById('d4').value="A"
  }
  else  if(per < 35){
    document.getElementById('d4').value="No Grade To Assign"
  }
  alert("Go Down For Result");



}
