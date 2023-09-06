let value=document.getElementById("value");

let increment=document.getElementById("increment");
let decrement=document.getElementById("decrement");
let value_data=0;
increment.addEventListener("click",function(){
      value_data++;
      value.innerHTML=value_data;
})

decrement.addEventListener("click",function(){
    value_data--;
    value.innerHTML=value_data;
})