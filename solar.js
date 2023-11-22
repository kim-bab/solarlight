var swipe = new Swiper('.swiper-container', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // pagination : { // 페이징 설정
    //     el : '.swiper-pagination',
    //     type:'bullets',
    //     clickable : true,
    //     on: {
    //     slideChangeTransitionEnd: function(){
    //     alert(this.activeIndex);
    //     },
    //     },
    // },
    navigation: { // 네비게이션 설정
        nextEl: '.swiper-button-next', // 다음 버튼 클래스명
        prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
    },
});


// let we=true;

// $(".swiper-button-pause").click(function(){
//     if(we==true){
//         $(this).addClass("on");
//         swipe.autoplay.stop();
//     }else{
//         $(this).removeClass("on");
//         swipe.autoplay.start();
//     }
//     we=!we;
// });


//우클릭방지
let omitformtags = ["input", "textarea", "select"]
omitformtags = omitformtags.join("|")
function disableselect(e) {
    if (omitformtags.indexOf(e.target.tagName.toLowerCase()) == -1)
        return false
}
function reEnable() {
    return true
}
if (typeof document.onselectstart != "undefined")
    document.onselectstart = new Function("return false")
else {
    document.onmousedown = disableselect
    document.onmouseup = reEnable
}




document.querySelector('.side0 a').classList.add('is-active');
document.querySelector('.side0').classList.add('bgactive');

/*스크롤시 메뉴 색깔 변경*/
let container = document.querySelectorAll('.container section');
let anchor = document.querySelectorAll('.anchor div ul li');
let anchorLink = document.querySelectorAll('.anchor div ul li a');


anchor.forEach((items, index) => {
    items.addEventListener('click', (e) => {
        e.preventDefault();

        const getId = e.target.getAttribute('href').slice(1);
        container.forEach((contents) => {
            const getOffset = contents.offsetTop - window.innerHeight / 2;
            if (contents.id === getId) {
                window.scroll({
                    top: getOffset,
                    behavior: 'smooth'
                })
            }
        })
    })
})

document.addEventListener('scroll', () => {
    let getScroll = window.scrollY;

    container.forEach((items, index) => {
        if (getScroll >= items.offsetTop - window.innerHeight / 1.5) {
            anchorLink.forEach((itemsLink) => {
                anchor.forEach((items) => {
                    itemsLink.classList.remove('is-active');
                    itemsLink.classList.remove('bgactive');
                    items.classList.remove('is-active');
                    items.classList.remove('bgactive');
                })
            })
            anchor[index].classList.add('bgactive');
            anchorLink[index].classList.add('is-active');
        }
    })
})


/*날짜*/
let TodayIs = new Date();
let yearIndex = TodayIs.getFullYear();
let monthIndex = TodayIs.getMonth()+1;
let dayIndex = TodayIs.getDate();
let totalYear = document.querySelectorAll('.year');
let totalDate = document.querySelectorAll('.day');


totalYear.forEach((items) => {
    items.innerHTML = `${yearIndex} ${monthIndex < 10 ? `0${monthIndex}` : monthIndex}`
})

totalDate.forEach((items) => {
    items.innerHTML = `${dayIndex < 10 ? `0${dayIndex}` : dayIndex}`
})


/*협력사 슬라이드*/
$('.slick-items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite : true,
    autoplaySpeed: 1500,
    responsive: [ // 반응형 웹 구현
    {  
        breakpoint: 1440, //화면 사이즈
        settings: {
            slidesToShow: 3
        } 
    },
    {  
        breakpoint: 768, //화면 사이즈
        settings: {
            slidesToShow: 2
        } 
    }]
});





