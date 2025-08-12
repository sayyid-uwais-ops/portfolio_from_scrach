function color_change_1(){
    const color=document.getElementById("button");
    color.style.backgroundColor="rgba(189, 58, 84, 1)";
}
function color_change_2(){
    const color=document.getElementById("button");
    color.style.backgroundColor="rgb(245, 4, 52)";
}
function change_pic(){
    const img2=document.getElementById("img1");
    const text=document.getElementById("para");
    img2.style.filter="blur(5px)";
    text.style.display="block";
}
function letter_change(){
    const img2=document.getElementById("img1");
    img2.style.filter="none";
    const text=document.getElementById("para");
    text.style.display="none";
}