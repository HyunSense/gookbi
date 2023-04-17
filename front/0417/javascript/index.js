/* console.log("기록중");
document.write("문서에 기록중");
a = 1004;
console.log(a);
document.write(a);
b="홍길동";
console.log("이름: " + b);
document.write("<br>이름 : ")
console.log("이름 : " + b + ", 숫자: " + a);
document.write("이름 : " + b + ", 숫자: " + a);


let c = 10, d = 20, e=f=30;
console.log(c, d, e, f);
console.log("----------------------");
c= c+100;
d+=100;
console.log("d값 : " + d);

let a = 10, b = 20, sum, sub, mul, div, nam;
sum = a + b;
sum = b - a;
mul = a * b;
div = b + a;
nam = a % 3;

document.write("<br>덧셈: " + sum);
document.write("<br>뺄셈: " + sub);
document.write("<br>곱셈: " + mul);
document.write("<br>나눗셈: " + div);
document.write("<br>나머지값: " + nam);

let a = "123";
// document.write("<br>" + a + 100);

b = Number(a) + 100;
document.write("<br>" + b);

window.onload=function(){
    let total=0, a;
    ok.onclick=function(){
        total =Number(kor.value) + parseInt(eng.value) + parseInt(mat.value);
        sum.innerHTML = total;
        a = total/3;
        avg.innerHTML = a.toFixed(2);
    };
};
*/
    window.onload=function(){
    // let a = 10, b = 20;
    // if(a>b)
    //     console.log("a가 크다");
    // else
    //     console.log("b가 크다")

        let num;
        btn.onclick=function(){
            num=parseInt(inp.value);
            if(num%2 == 0)
                result.innerHTML = "짝수"
            else
                result.innerHTML = "홀수"
        }

        let prev, disp, next, count=1, pic;
        prev=document.getElementById("prev");
        disp=document.getElementById("disp");
        next=document.getElementById("next");
        pic=document.querySelector(".pic");

        next.onclick=function() {
            
            if(count >= 5) {
                alert("마지막 페이지입니다.")
            }else{
                
                count += 1;
            }
            disp.innerHTML = count + " / 5";
            pic.src="img/big" + count + ".jpg"; 
        }
        

        prev.onclick=function(){
            
            if(count<=1){
                alert("마지막 페이지입니다.")
            }else{
                count -= 1;
            }
            disp.innerHTML = count + " / 5"
            pic.src="img/big" + count +".jpg";
        }

        disp.innerHTML = count + " / 5"
        pic.src="img/big" + count +".jpg";



       
    
}
