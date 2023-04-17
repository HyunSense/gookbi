window.onload = function(){
let login;
login  = document.querySelector(".login");
at1 = document.querySelector(".at1");
login.onclick = function(){

    at1.style.display = "block";
}
let ok,id,pw;

ok=document.querySelector(".ok");
id=document.querySelector(".id");
pw=document.querySelector(".pw");

ok.onclick=function(){
    // console.log(id.value);
    if(id.value == "abc" && pw.value == "123"){
        alert("로그인 되었습니다");
        at1.style.display = "none";
    }else if(id.value !== "abc" && pw.value !=="123"){
        alert("ㄴㄴ")
    }else if(id.value !== "abc") {
        alert("ID 가 올바르지 않습니다");
    }else{
        alert("PW 가 올바르지 않습니다");
    }

    }
}