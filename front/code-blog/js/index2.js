window.onload = function(){

    

    let bgBlack = $(".bgBlack");
    // console.log(bgBlack);

    let imgTitle = $(".imgTitle");

    $(".arrow").on("click",function(){

        // console.log("arrow--");
        $(this).animate({rotate:"+=180deg"}, 400);
        $(".noticeTable").animate({height:"toggle"}, 400);

    });

    $(bgBlack).each(function(i){
        $(bgBlack[i]).hover(function(){
        console.log("hovering--");
        $(imgTitle[i]).stop().animate({left:"80px",top:"100px"},300);
    },function(){
        $(imgTitle[i]).stop().animate({left:"12px",top:"205px"},300);
        // $(imgTitle[i]).stop();
    });

    
    });



    // $(".bgBlack").hover(function(){
    //     console.log("hovering--");
    //     $(".imgTitle").animate({left:"80px",top:"100px"},500);
    // },function(){
    //     $(".imgTitle").animate({left:"12px",top:"205px"},500);
    // });










};




  