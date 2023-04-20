let i;
const imgTextA=[
    "엄마와 아기", "소파", "침대", "텐트", "오렌지색 의자"
]
// $(document).ready(function(){
// $(function() {
// window.addEventListener("load",function(){
window.onload=function() {
    let imgBox;
    imgBox = document.querySelector(".imgBox").getElementsByTagName("li");
    for(i=0; i<5; i++){
        imgBox[i].style.background="url(img/img"+i+".jpg)";
        imgBox[i].style.backgroundSize="100% 100%";
    }
    

    
    let img, imgText;
    img = document.getElementsByClassName("img");
    imgText = document.getElementsByClassName("imgText");
    for(i=0; i<5; i++){
        img[i].style.background="url(img/img"+i+".jpg)";
        img[i].style.backgroundSize="100% 100%";
        imgText[i].innerHTML = imgTextA[i];
    }

    let leftImg;
    const leftImgA=["big1.jpg", "big2.jpg", "big3.jpg"]
    const leftImg_pumA=["빨강 아식스", "하얀 아식스", "빨강 아식스"]
    const leftImg_priceA = [25000, 35000, 45000]
    leftImg = document.querySelector(".left").getElementsByTagName("li")
    for(i=0; i<leftImgA.length; i++){
        leftImg[i].style.background="url(img/" + leftImgA[i]+")";
        leftImg[i].style.backgroundSize="100% 100%";
        
    }

    $(".left li").on("click", function(){
        no=$(this).index();
        // console.log(no);
        $(".pic").attr("src","img/"+leftImgA[no]);
        $(".pum").text(leftImg_pumA[no]);
        $(".price").text(leftImg_priceA[no]);

    })
// });
};