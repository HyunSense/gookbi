window.onload=function(){

    let sec3 = document.getElementById("sec3");
    let showDivs = sec3.querySelectorAll(".more div");
    let showDetails = sec3.querySelectorAll(".more div p");

    // -------- 자세히 보기 SHOW, HIDE, Animate---------

    // $(showDivs).each(function(i){
    //     $(showDivs[i]).hover(function(){
    //         // console.log("show");
    //         $(showDetails[i]).show();
    //         $(showDetails[i]).animate({bottom:"100px"},1000);
     
    //     },function(){
    //         // console.log("hide");
    //         $(showDetails[i]).hide();
    //     });
    
    // });


    
    // $(showDivs).each(function(i){
    //     $(showDivs[i]).hover(function(){
    //         $(showDetails[i]).show(1,showFunc);
       
  
    //     },function(){
    //         $(showDetails[i]).hide(1,hideFunc);
            
    //     });
        
    // });
//--------------------------------------------
//show(),hide()를 toggle()로 수정가능
    // $(showDetails).hide();
    // $(showDivs).each(function(i){
    //     $(showDivs[i]).hover(function(){
    //         $(showDetails[i]).show(0,showFunc);
       
  
    //     },function(){
    //         $(showDetails[i]).hide(1000,"linear",hideFunc);
    //         // $(this).hide();
            
    //     });
        
    // });

    
    function showFunc(){
        $(this).animate({bottom:"10px"},600);
    }

    function hideFunc(){
        $(this).animate({bottom:"-60px"},600);

    }
//---------------------------------------------
    // $(showDetails[i]).animate({bottom:"100px"},1000,function(){
    //     if($(showDetails[i]).hide()){
    //         $(showDetails[i]).animate({bottom:"100px"},10);
    //     } else {
    //         $(showDetails[i]).animate({bottom:"100px"},1000);
    //     }
    // });


    // -------- 자세히 보기 SHOW, HIDE------END

    













};