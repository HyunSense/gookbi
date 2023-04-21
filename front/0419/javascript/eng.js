window.onload=function(){

}

$(function(){
    $("nav div").on("click", function(){
        $(".at").hide();
        n=$(this).index();
        $(".at"+n).show();
    })
})
