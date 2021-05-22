let countel = document.getElementById("elemnt-no");
let savel = document.getElementById("elemt-save");
console.log(countel);
let count = 0;
let s = "";
function incr() {
  count = count + 1;
  countel.innerText = count;
}
function reset() {
  countel.innerText = 0;
  count = 0;
  savel.innerHTML = "";
}
function save() {
  let s = countel.innerText;
  savel.innerHTML += s + "-";
}
