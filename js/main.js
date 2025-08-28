
//toggle
let menu=document.getElementsByClassName('menu-toggle')[0];
let ul=document.getElementsByClassName('nav-links')[0];
menu.addEventListener('click' ,()=>{
    ul.classList.toggle('show-ul');
})


//  scroll

let btn=document.getElementsByClassName('scroll')[0];

function scrolling(){
     if(scrollY==0)btn.style.display="none";
    else btn.style.display="block";
}
btn.addEventListener('click',()=>{
    if(scrollY>0)scroll({
        top:0,
        behavior:'smooth',
    });
    scrolling();
});
window.addEventListener('DOMContentLoaded' ,scrolling);
window.addEventListener('scroll' ,scrolling);