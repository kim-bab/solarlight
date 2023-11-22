
let menuToggle = document.querySelector(".menu-toggler");
let shop = document.querySelector('.online-shop');

/*모바일 메뉴*/
menuToggle.addEventListener('click', () => {
    shop.classList.toggle("active");
    document.querySelector(".gnb").classList.toggle('is-active');
    document.querySelector(".m_menu").classList.toggle('is-active');
    document.querySelector('.logo1').classList.toggle('is-active');
    document.querySelector('label[for="menu-toggler"]').classList.toggle('color-active');
    document.querySelector(".hamburgerbox").classList.toggle('is-active');
})




/*header hover event*/
let clickHandler = document.querySelector("header");
clickHandler.addEventListener('mouseover', () => {
    clickHandler.classList.add("on");
    document.querySelector(".accodian_menu").classList.add("is-active");
})

clickHandler.addEventListener('mouseout', () => {
    clickHandler.classList.remove("on");
    document.querySelector(".accodian_menu").classList.remove("is-active");
})


/*up 스크롤 이동 부드럽게*/
function scrollTo(e) {
    window.scroll({
        behavior: 'smooth',
        top: e
    });
}

document.querySelector('.up').addEventListener('click', () => {
    scrollTo(document.querySelectorAll('body'), 'up');
});