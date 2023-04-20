const menuA = [
    "로고", "제품안내", "주문","갤러리",
    "배송조회", "로그인", "English"
] 

// $(function() {
    
// for(a=0; a<menuA.length; a++){
//     console.log(menuA[a]);
//     $("nav".has("div")).text(menuA[a]);
// }

// });


const codeA=["100", "101", "102", "103", "104"];
const nameA=["홍길동","이동수","김철수","강호동","유재석"];
const addrA=[
    "서울시 강남구 개포동 123",
    "서울시 서초구 개포동 100",
    "경기도 수원시 개포동 250",
    "서울시 송파구 개포동 354",
    "서울시 마포구 개포동 343"
];

const telA=["010-124-1234","010-124-1234",
            "010-124-1234","010-124-1234",
            "010-124-1234"];

const magA = ["담당자","담당자","담당자","담당자","담당자"];
window.onload=function(){

    let i, menu;
    menu = document.getElementById("menu").getElementsByTagName("div");
//     // menu = document.getElementsByTagName("nav")[0].getElementsByTagName("div");
//     // menu = document.querySelectorAll("nav")[0].getElementsByTagName("div");
//     for(i=0; i<menuA.length; i++){
//         menu[i].innerHTML=menuA[i];
//     }


    // menuA.forEach(
    //     function(item, ind){
    //         // console.log(item, ind);
    //         menu[ind].innerHTML=menuA[ind];
    //     }
    // )

    menuA.forEach((item,ind)=> {
        menu[ind].innerHTML = menuA[ind];
    });

    let code, na, addr, tel, mag;

    code=document.getElementsByClassName("code");
    na=document.getElementsByClassName("name");
    addr=document.getElementsByClassName("addr");
    tel=document.getElementsByClassName("tel");
    mag=document.getElementsByClassName("mag");

    codeA.forEach((items, item)=>{
        code[item].innerHTML = codeA[item];
    });
    nameA.forEach((items, item)=>{
        na[item].innerHTML = nameA[item];
    });
    addrA.forEach((items, item)=>{
        addr[item].innerHTML = addrA[item];
    });
    magA.forEach((items, item)=>{
        mag[item].innerHTML = magA[item];
    });

    telA.forEach((items, item)=>{
        tel[item].innerHTML = telA[item];
    });

    $("#menu div").on("click",function(){
        $("at").hide();
        
       n=$(this).index();
       if(n==4) 
        $(".at0").show();
    })
    $(".close").on("click",function(){
        $(".tab").hide();
    })

    const obj={
        name : "홍길동",
        age : 20,
        city : "서울",
        data: ["강남", "송파", "수원"]
    };
    
    for(n in obj.data){
        console.log(obj.data[n]);
    }

    obj.data.forEach((item, ind)=>{
        console.log(obj.data[ind])
    });

    // $(".box2 .space").obj.name.innerHTML

    // let space = document.getElementsByClassName("space");
    // space[0].innerHTML = obj.name;
    // space[1].innerHTML = obj.age;
    // space[2].innerHTML = obj.city;

    obj.data.forEach((items, i)=>{
        console.log(i);
    $(".box2 li").text(obj.data[i]);
    });

    // for(i=0; i<obj.data.length; i++){
    //     space[i].innerHTML = obj.data[i];
    // }

    // 제품안내 메뉴에서 그림 8개 만들기 프로그램 시~작~
    const pumA={
        img:[
            "img1.jpg",
            "img2.jpg",
            "img3.jpg",
            "img4.jpg",
            "img5.jpg",
            "img6.jpg",
            "img7.jpg",
            "img8.jpg",
    ],
    
    title:[
        "상품명 : 1번",
        "상품명 : 2번",
        "상품명 : 3번",
        "상품명 : 4번",
    ],
    sizeA:[
        "사이즈 :150cm",
        "사이즈 :250cm",
        "사이즈 :350cm",
        "사이즈 :450cm"

    ],
    colorA:[
        "색 상 : 빨강",
        "색 상 : 파랑", 
        "색 상 : 노랑", 
        "색 상 : 초록" 
   ],
   priceA:[
    " 가 격 : 2,500 원",
    " 가 격 : 3,500 원",
    " 가 격 : 4,500 원",
    " 가 격 : 5,500 원",

   ]


}




    // 제품안내 메뉴에서 그림 8개 만들기 프로그램 끝
    let pum_img;
    pum_img = document.querySelector(".at1_imgBox").getElementsByTagName("li");

    //// 제품메뉴 클릭시 나타난 8개 그림을 오브젝트에서 불러와 forEach로 넣기
    pumA.img.forEach((item, ind)=> {
        pum_img[ind].style.background="url(img/"+pumA.img[ind]+")";
        pum_img[ind].style.backgroundSize="100% 100%"
    });

    // 제품메뉴 클릭시 나타난 8개 그림을 클릭했을 때 큰그림 보이기
    $("#menu div").on("click", function() {
        $("at").hide();

        $(".big").show();
        n=$(this).index();
        if(n == 1){
            $(".at1").show();
            // $(".big").show();
        }

        $("#pic").attr("src","img/" + pumA.img[n]);

        // for(i=0; i<pumA.title.length; i++){
        //     $(".big_text li:nth-child(" + (i+1) + ")").text()
        // }

        $(".big_text li:eq(0)").text(pumA.title[n]);
        $(".big_text li:eq(1)").text(pumA.sizeA[n]);
        $(".big_text li:eq(2)").text(pumA.colorA[n]);
        $(".big_text li:eq(3)").text(pumA.priceA[n]);

    })
    
    $(".big_close").css("cursor", "pointer");
    $(".big_close").on("click", function() {
        $(".big").hide();
    })
}