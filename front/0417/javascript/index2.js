window.onload = function(){

let btn, su, price, total, su_value;
btn = document.querySelector(".btn");

btn.onclick = function(){

    su = document.querySelector(".su");
    total = document.querySelector(".total");
    
    su_value= parseInt(su.value);
    price = 5000 * su_value;

    total.innerHTML = price + " 원";
    


    }
}