let images=['d1.png','d2.png','d3.png','d4.png','d5.png','d6.webp'];
let img=document.getElementsByTagName("img")[0];
let img1=document.getElementsByTagName("img")[1];
let player1=document.getElementById("p11");
let player2=document.getElementById("p22");
let w=document.getElementById("h");
let p1=prompt("enter player1");
let p2=prompt("enter player2");
player1.innerHTML=p1;
player2.innerHTML=p2;
function roll1(){
    let rn=Math.floor(Math.random()*images.length);
    img.src=images[rn];
    if(img.src>img1.src){
        w.innerHTML=`${p1} is the winner`;
    }
    else if(img.src<img1.src){
        w.innerHTML=`${p2} is the winner`;
    }
    else{
        w.innerHTML="Draw";
    }
}
function roll2(){
    let rn2=Math.floor(Math.random()*images.length);
    img1.src=images[rn2];
    if(img.src>img1.src){
        w.innerHTML=`${p1} is the winner`;
    }
    else if(img.src<img1.src){
        w.innerHTML=`${p2} is the winner`;
    }
    else{
        w.innerHTML="Draw";
    }

}
