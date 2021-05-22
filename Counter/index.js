let countel=document.getElementById("elemnt-no")
console.log(countel)
let count =0;
function incr(){
    count=count+1
    countel.innerText=count;
}
function reset(){
    countel.innerText=0;
    count=0;
}