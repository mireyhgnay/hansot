// ///////////////// Main Img Slider ///////////////// //

// slide
const slideWrap = document.querySelector('.slide-wrap');
const slideList = document.querySelectorAll('.slide-list');
const slideLength = slideList.length; 
const slideWidth = 100 / (slideLength + 1); 

// slide btn
const slideBtn = document.querySelectorAll('.btn-dot');
const pauseBtn = document.querySelector('.control-btn.pause');
const playBtn = document.querySelector('.control-btn.play');


// slide-wrap(ul) 넓이 지정
slideWrap.style.width = `${100 * (slideLength + 1)}%`;
// slide-list(li) 넓이 지정
slideList.forEach((element) => {
  element.style.width = `${slideWidth}%`;
}); 

// 마지막 이미지 끝나면 첫번째 슬라이드로
const firstSlideArea = slideWrap.firstElementChild.cloneNode(true); // cloneNode(true) : 자식요소까지 복제
slideWrap.appendChild(firstSlideArea);


let currentIndex = 0; 
let currentBtn = slideBtn[currentIndex];
currentBtn.classList.add('active');

let clear; // clearInterval를 위한


function autoPlay() {
  clear = setInterval(() => {
    slideWrap.style.transition = '.5s';  
    slideWrap.style.transform = 
    `translateX(-${slideWidth * (currentIndex + 1)}%`;
    
    currentBtn.classList.remove('active');
    currentBtn = slideBtn[++currentIndex];				
    
    if(currentIndex === slideLength) {
      setTimeout(() => {
        slideWrap.style.transition = '0s';
        slideWrap.style.transform = 'translateX(0)';
      }, 500);

      currentIndex = 0;
      currentBtn = slideBtn[0];
    };

    currentBtn.classList.add('active');
  }, 5000);
};

document.addEventListener("DOMContentLoaded", () => {
  autoPlay();
});


// play, pause button click
pauseBtn.addEventListener('click', () => {
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'block';
  clearInterval(clear); // stop
});

playBtn.addEventListener('click', () => {
  pauseBtn.style.display = 'block';
  playBtn.style.display = 'none';
  autoPlay(); // play
});


// 슬라이드 dot 클릭 시 슬라이드 이동하기
for (let i = 0; i < slideLength; i++){
  slideBtn[i].onclick = () => {
    // pause 상태인 경우
    if ( playBtn.style.display === 'block' ) { 
      slideWrap.style.transition = '.5s';
      // 클릭한 해당 슬라이드로 이동
      slideWrap.style.transform = `translateX(-${slideWidth * i}%`; 
    
      clearInterval(clear); // 중지

      for (let i = 0; i < slideLength; i++) {
        slideBtn[i].classList.remove('active');
      };
      // 선택된 btn active 추가
      slideBtn[i].classList.add('active'); 
      currentIndex = i; // 현재위치에서 다시재생
    }

    // play 상태인 경우
    else {
      slideWrap.style.transition = '.5s';
      slideWrap.style.transform = `translateX(-${slideWidth * i}%`;
      
      clearInterval(clear);
      
      // 현재위치에 있는 버튼 active remove 
      currentBtn.classList.remove('active'); 
      slideBtn[i].classList.add('active'); 
      
      currentIndex = i;

      // 5초뒤에 클릭된 버튼 active remove
      setTimeout(() => {
        slideBtn[i].classList.remove('active'); 
      },5000); 
      
      autoPlay();
    }  
  }
};