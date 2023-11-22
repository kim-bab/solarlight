


/*전체 스크롤 이동 부드럽게*/
function scrollTo(e){
    window.scroll({
        behavior: 'smooth',
        top: e
    });
}

document.querySelector('.up').addEventListener('click', () => {
    scrollTo(document.querySelectorAll('body'), 'up');
});



// document.addEventListener('scroll', () => {
//     let history = document.body.scrollTop || document.documentElement.scrollTop; //브라우저 스크롤 높이
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight || document.body.scrollTop - document.body.clientHeight; //브라우저 높이 - 엘리먼트 자체 높이
//     let gkshk = document.documentElement.scrollHeight- document.querySelector('.area_history').scrollTop || document.body.scrollTop - document.querySelector('.area_history').scrollTop;
//     let scrolled = (history/height)*100 - (gkshk / 850);

//         let line = document.querySelector('.line');
//         line.style.height = `${(scrolled+'%')}`;
// })