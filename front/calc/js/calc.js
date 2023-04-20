$(function(){

    let op;
    let calcVal = ""
    let inputResult = "";
    var results = 0;
    var printResult = 0;

// $(".equal").on("click", function click(){

//     $("input").attr("value", data);
// });

$("button").on("click",function click(){
    // var num = $(this).attr("value");

    
    calcVal = $(this).text();
    console.log("calcVal = " + calcVal);
    
    if(calcVal == "()"){

        inputResult += "(";
        $("input").attr("value", inputResult);
        // console.log("Bar Test = " + inputResult)

        if(inputResult.includes("(")){
            // inputResult += ")";
            // $("input").attr("value", inputResult);
        // console.log("Bar Test = " + inputResult)
        }
    }else{

    inputResult += calcVal;
    

    console.log("inputResult = " + inputResult);

    $("input").attr("value", inputResult);

    console.log("length = " + inputResult.length);

    if(calcVal == "="){

        results = inputResult.substring(0,inputResult.length-1);
        printResult = eval(results);
        console.log("최종값 = "+ printResult);
        $("input").attr("value", printResult);
        inputResult = "";

    }else if(calcVal == "c"){
        inputResult = "";
        $("input").attr("value", inputResult);
    }
}
});

// function inputCalc(){

//     inputResult = $("input").attr("value", num);
//     console.log("inputResult = " + inputResult);
// }

});