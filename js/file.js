let top_btn= document.getElementById('btn-scroll');

let homeanchor = document.getElementById('homeanchor');
let aboutCoronaAnchor = document.getElementById('aboutCoronaAnchor');
let Symptomsanchor = document.getElementById('Symptomsanchor');
let preventanchor = document.getElementById('preventanchor');
let teatmentanchor = document.getElementById('teatmentanchor');
let FAQanchor = document.getElementById('FAQanchor');
let newsanchor = document.getElementById('newsanchor');
let doAndDonotAnchor = document.getElementById('doAndDonotAnchor');

// sections ids

let homeSection = document.getElementById('homeSection');
let aboutTheDisease = document.getElementById('aboutTheDisease');
let symptomsOfCorona = document.getElementById('symptomsOfCorona');
let prevention = document.getElementById('prevention');
let treatment = document.getElementById('treatment');
let faq = document.getElementById('faq');
let news = document.getElementById('news');

window.onscroll = function(){
    if(window.scrollY>200){
        top_btn.style.display = 'block'
    }else{
        top_btn.style.display = 'none'
    }

    if(window.scrollY>=homeSection.offsetTop){
        homeanchor.classList.add('changeColor')
    }else{
        homeanchor.classList.remove('changeColor')
    }

    if(window.scrollY>=aboutTheDisease.offsetTop){
        aboutCoronaAnchor.classList.add('changeColor')
        homeanchor.classList.remove('changeColor')
    }else{
        aboutCoronaAnchor.classList.remove('changeColor')
    }
    if(window.scrollY>=symptomsOfCorona.offsetTop){
        Symptomsanchor.classList.add('changeColor')
        aboutCoronaAnchor.classList.remove('changeColor')
        homeanchor.classList.remove('changeColor')
    }else{
        Symptomsanchor.classList.remove('changeColor')
    }
    if(window.scrollY>=prevention.offsetTop){
        preventanchor.classList.add('changeColor')
        Symptomsanchor.classList.remove('changeColor')
        aboutCoronaAnchor.classList.remove('changeColor')
        homeanchor.classList.remove('changeColor')
    }else{
        preventanchor.classList.remove('changeColor')
    }
    if(window.scrollY>=treatment.offsetTop){
        teatmentanchor.classList.add('changeColor')
        preventanchor.classList.remove('changeColor')
        Symptomsanchor.classList.remove('changeColor')
        aboutCoronaAnchor.classList.remove('changeColor')
        homeanchor.classList.remove('changeColor')
    }else{
        teatmentanchor.classList.remove('changeColor')
    }
    if(window.scrollY>=faq.offsetTop){
        FAQanchor.classList.add('changeColor')
        teatmentanchor.classList.remove('changeColor')
        preventanchor.classList.remove('changeColor')
        Symptomsanchor.classList.remove('changeColor')
        aboutCoronaAnchor.classList.remove('changeColor')
        homeanchor.classList.remove('changeColor')
    }else{
        FAQanchor.classList.remove('changeColor')
    }
    if(window.scrollY>=news.offsetTop){
        newsanchor.classList.add('changeColor')
        FAQanchor.classList.remove('changeColor')
        teatmentanchor.classList.remove('changeColor')
        preventanchor.classList.remove('changeColor')
        Symptomsanchor.classList.remove('changeColor')
        aboutCoronaAnchor.classList.remove('changeColor')
        homeanchor.classList.remove('changeColor')
    }else{
        newsanchor.classList.remove('changeColor')
    }

}
// scroll btn
top_btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}

let menu = document.querySelector('.container .header .content')
let bars = document.getElementById('bars')
bars.addEventListener('click',function(){
    if(menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'flex'
    }
})