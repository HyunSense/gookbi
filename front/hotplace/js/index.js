window.onload = function(){

    let selecs;
    let selec
    let selecCount = 0
    let heartCount = 1;

    // selecs = document.querySelectorAll(".selec");
    selec = document.querySelector(".selec");
    heartCount = document.getElementById("heartCount");

    // selecs.addEventListener("click", function(){
    //     console.log(selecCount++);
    // });
   
   selec.onclick = function(){

    selecCount++;
    console.log(selecCount);
   } 

    


   




    






};