const menuButton = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.header__nav');

menuButton.addEventListener ('click', () =>{
    if(navlinks.style.transform === 'scaleY(1)'){
        navlinks.style.transform = 'scaleY(0)';
    }else{
    navlinks.style.transform = 'scaleY(1)';
    }
});