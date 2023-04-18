let i;
window.onload=function() {
    let imgBox;
    imgBox = document.querySelector(".imgBox").getElementsByTagName("li");
    for(i=0; i<5; i++){
        imgBox[i].style.background="url(img/img"+i+".jpg)";
        imgBox[i].style.backgroundSize="100% 100%";
    }
    document.querySelector()
    let img, imgText;
    img = document.getElementsByClassName("img");
    imgText = document.getElementsByClassName("imgText");
    for(i=0; i<5; i++){
        img[i].style.background="url(img/img"+i+".jpg)";
        img[i].style.backgroundSize="100% 100%";

    }
    
}