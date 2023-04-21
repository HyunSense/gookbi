const macA={
    menuA:[
        "Menu", "Store", "New", "Story",
        "햄버거", "음료수", "지점안내", "고객센터"
    ],

    sub0A: [
        "버거", "맥런치", "맥모닝"
    ],
    sub1A: [
        "버거", "맥런치", "맥모닝","해피스넥"
    ],
    sub2A: [
        "버거", "맥런치"
    ],
    sub3A: [
        "버거", "맥런치", "맥모닝"
    ],
    sub4A: [
        "버거", "맥런치",
    ],
    sub5A: [
        "버거", "맥런치", "맥모닝", "기타"
    ],
    bigBoxA: ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg"],

    at17PumA : ["노랑", "파랑", "세사람", "제품들", "두개", "햄버거"],
    at17ImgA: ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg","img06.jpg"],
    
    at17PriceA: [
        100, 200, 300, 400, 500, 600
    ]



}

let i, no, str = "", nav, sub0, sub1, sub2, sub3, sub4, sub5, img5Box;

window.onload=function(){

    nav = document.getElementById("nav").getElementsByTagName("div");
    macA.menuA.forEach((item, ind)=>{
        nav[ind].innerHTML = macA.menuA[ind];
    })

    sub0 = document.querySelector(".sub0").getElementsByTagName("li");
    sub1 = document.querySelector(".sub1").getElementsByTagName("li");
    sub2 = document.querySelector(".sub2").getElementsByTagName("li");
    sub3 = document.querySelector(".sub3").getElementsByTagName("li");
    sub4 = document.querySelector(".sub4").getElementsByTagName("li");
    sub5 = document.querySelector(".sub5").getElementsByTagName("li");

    macA.sub0A.forEach((item, ind)=>{
        sub0[ind].innerHTML = macA.sub0A[ind];
    })
    macA.sub1A.forEach((item, ind)=>{
        sub1[ind].innerHTML = macA.sub1A[ind];
    })
    macA.sub2A.forEach((item, ind)=>{
        sub2[ind].innerHTML = macA.sub2A[ind];
    })
    macA.sub3A.forEach((item, ind)=>{
        sub3[ind].innerHTML = macA.sub3A[ind];
    })
    macA.sub4A.forEach((item, ind)=>{
        sub4[ind].innerHTML = macA.sub4A[ind];
    })
    macA.sub5A.forEach((item, ind)=>{
        sub5[ind].innerHTML = macA.sub5A[ind];
    })

    img5Box = document.querySelector(".img5Box").getElementsByTagName("li");

    macA.bigBoxA.forEach((item, ind)=>{

        img5Box[ind].style.background = "url(img/"+ macA.bigBoxA[ind]+")";
        img5Box[ind].style.backgroundSize = "100% 100%";
    })

    // 아티클 - 18번 그림 5개 넣기
    let at18_box_img5 = document.querySelector(".at18_box_img5").getElementsByTagName("li");
    macA.bigBoxA.forEach((item, ind)=>{
        at18_box_img5[ind].style.background="url(img/" + macA.bigBoxA[ind]+")";
        at18_box_img5[ind].style.backgroundSize="100% 100%";
    })
    


let timer=setInterval("show()", 5000); // 일정 시간 간격으로 일처리를 반복 동작
let count = 0;
function show(){

    if(count < 4){
        count++;
    }else{
        count = 0;
    }
    
    $(".choose li").css("background", "white");
    $(".choose li:eq(" + count + ")").css("background","red");
    $(".img5Box").animate({"left":"-=100%"}, 1000, function() {
        $(".img5Box li:first").appendTo(".img5Box"); 
        $(".img5Box").css("left","+=100%");
    });

};    
    // ******************* 아타클-17 시작 *******************

    let at17_no;

    for(i=0; i<macA.at17ImgA.length; i++){
        $(".at17_left > div:eq(" + i + ")").css("background", "url(img/" + macA.at17ImgA[i] +")")
                                         .css("backgroundSize", "100% 100%");
    }
    // 6개 그림을 클릭하면
    $(".at17_left > div").on("click", function(){  
        at17_no = $(this).index();
        console.log(macA.at17PriceA[at17_no]);
        $(".at17_pum").html("상품명 : " + macA.at17PumA[at17_no]);
    })
    
    
    $(".at17_su").on("click", function(){
        su = $(".at17_su").val();
        kum = macA.at17PriceA[at17_no] * su;
        console.log(su, kum);
        $(".at17_price").html(parseInt(kum) + "원");
    })
    
    
    $(".at17_ok").on("click", function(){
        // su = $(".at17_su").val();
        // console.log(su);
        // kum = macA.at17PriceA[at17_no] * su;
        $(".at17_result").html(macA.at17PumA[at17_no] + "</p>" + kum + "결제완료")
        $(".at17_popup").show();
    });

    $(".at17_popup_close").on("click",function(){
        $(".at17_popup").hide();

    })


  
    // ******************* 아타클-17 끝 *******************

}

$(function(){ // onload 작업이끝나면 실행, 제이쿼리 작업 영역



    $(".choose li:eq(0)").css("background", "red");
    $(".choose li").on("click", function(){
        no=$(this).index();
        // console.log(n);
        count = no;
        $(".choose li").css("background", "white");
        $(".choose li:eq(" + count + ")").css("background","red");
    })





    $(".subBox ul li").on("click", function(){
        no=$(this).attr("class").substr(4,2);
        // console.log(no);
        $(".at").hide();
        $(".at"+no).show();
        
    })

    // 아티클-18 에서 라디오버튼(옵션) 클릭으로 그림 이동(slide)
    $("#at18_choose li").on("click", function(){
        no=$(this).index();
        $("#at18_choose li").css("background","white");
        $("#at18_choose li:eq("+ no +")").css("background","red");
        pos=-1000*no;
        $(".at18_box_img5").animate({"left": pos+"px"},500);
    })

    $(".at19_menu li").on("click",function(){
        $(".at19_menu li").css("background","white");
        $(this).css("background", "skyblue");
        no=$(this).index();
        $(".at19_menuBox").hide();
        $(".at19_menuBox"+no).show();
    })

})


