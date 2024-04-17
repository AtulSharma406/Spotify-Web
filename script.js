let middlePortion=document.getElementById('middle-portion');
let rightPortion=document.getElementById('right-portion');
var cross=document.getElementById("cross");
cross.addEventListener('click',()=>{
  rightPortion.style.display='none';
  middlePortion.style.width="1340px";
});
