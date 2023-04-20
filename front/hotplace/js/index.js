window.onload = function(){

    let selec = new Array();
    let heartCount = 0;
    let selecCount = 0;
    let totalCount = 0;
   

    selec = document.getElementsByClassName("selec")
    heartCount = document.getElementById("heartCount");
    function likes(){
    for(i=0; i<selec.length; i++){

        
        selec[i].onclick = function() {
            console.log(selec[i]);
            selecCount++;
            console.log("selecCount " + selecCount);
            heartCount.innerHTML = selecCount
        }
    } 
};
        
  
        likes();
    
        // //빨강이넣기
        // $(".selec").on("click", function(){
        //     $(this).css("color","red");

        // });

    prev = document.getElementById("prev");
    next = document.getElementById("next");
    
    let loginId, loginPw, loginBtn;

    loginId = document.getElementById("loginId");
    loginPw = document.getElementById("loginPw");
    loginBtn = document.getElementById("btn");

    loginBtn.onclick = function(){
        console.log("로그인 체크");
        if(loginId.value == "qwer" && loginPw.value == "1234"){
            alert("login 성공");                
        }else{
            alert("로그인 실패, ID,PW를 확인해주세요");
        }
    }


};