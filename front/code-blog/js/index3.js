window.onload = function(){

    

    let bgBlack = $(".item .bgBlack");
    let imgTitle = $(".imgTitle");

    $(".arrow").on("click",function(){

        // console.log("arrow--");
        $(this).animate({rotate:"+=180deg"}, 400);
        $(".noticeTable").stop().animate({height:"toggle"}, 400);

    });

    $(bgBlack).each(function(i){
        $(bgBlack[i]).hover(function(){
        console.log("hovering--");
        $(imgTitle[i]).stop().animate({left:"87px",top:"100px"},300);
    },function(){
        $(imgTitle[i]).stop().animate({left:"12px",top:"213px"},300);
    });

    });


    $(".layout5").hide();

    $(bgBlack).each(function(i){
        $(bgBlack[i]).on("click",function(){
        // $(".layout5").animate({top:"50px"},400).show();    
        $(".layout5").animate({top:"50px"},400).show(); 
        // $(".layout5").show();
        $(".overRay").show();   
        });
    });

    $(".closeBtn").on("click", function(){

        $(".layout5").animate({top:"1000px"},200,function(){
        $(".layout5").hide()});
        $(".overRay").hide();
    });

    $(".overRay").on("click", function(){
        console.log("hide");
        $(".layout5").hide();
        $(this).hide();
    });

    // $(".loginMain").hide();
    // $(".lgLayout").hide();



    // $(".menuLogin").on("click",function(){
    //     console.log("click");
    //     $("lgLayout").show();
    //     $(".loginMain").show();
    //     // $(".afm").show();
    //     // $(".loginMain").hasClass("efm");
    //     $(".loginMain").animate({top:"200px"},300);
    // });

    $(".menuLogin").on("click",function(){
        $(".loginMain").show();

    })

   
    





    // $(bgBlack).each(function(i){
    //     $(bgBlack[i]).on("click",function(){
    //         $(".layout5").show();
    // })
    // });









};




  