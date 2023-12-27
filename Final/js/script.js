//Filter posts
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value=$(this).attr('data-filter')
        if(value=='all'){
            $('.post-box').show('3000')
        }
        else{
            $('.post-box').not('.'+value).hide('3000')
            $('.post-box').filter('.'+value).show('3000')
        }
    });
    //add active animations to button
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass('active-filter');
    });
});

//header animation for scrolling
let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
});