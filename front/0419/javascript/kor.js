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
       n=$(this).index();
       if(n==4) 
        $(".tab").show();
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
    $(".at1_imgBox li").on("click", function() {
        $(".big").show();
        n=$(this).index();
        $("#pic").attr("src","img/" + pumA.img[n]);
    })
    
    
    $(".big_close").on("click", function() {
        $(".big").hide();
    })
}