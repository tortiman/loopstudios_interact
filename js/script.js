document.addEventListener('DOMContentLoaded',()=>{
    const nav = document.querySelector('.header__nav--mobile');
    const btn = document.querySelector('.header__hamburger');
    const btnClose=document.querySelector('.header__close');

    btn.addEventListener('click', () => {
    const current = getComputedStyle(nav).display;
    nav.style.display = current === 'none' ? 'block' : 'none';
    });

    btnClose.addEventListener('click', () => {
        nav.style.display = 'none';
    
    });
    
});