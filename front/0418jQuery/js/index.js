window.onload=function() {
    // $(".btn").on("click",function() {
    //     $("#img").hide();
    // })


    // document.write("<br> 자동차 -0")

    //  var cars = new Array(50);

    //  for(i=0; i<cars.length; i++){

    //     document.write("<br> 자동차 - "+i);

    //  }

    // let sum = 0;

    // for(i=0; i<=100; i++){
    //     // document.write(i+1 + "<br>");
    //     sum += i;
    // }
    // document.write(sum);

    let box = document.querySelector(".box");
    let str="";
    for(i=0; i<=9; i++){
        str= str + "3 * " + i + " = " + 3*i;
        box.innerHTML = str;
    }
}