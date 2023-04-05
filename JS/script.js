
// 타이핑 효과
const $txt = document.querySelector(".txt-title");

// content 변수
const content = "안녕하세요! \nCoMit 웹개발 분반 \n 유현지입니다:)";
let contentIndex = 0;

// typing 함수
let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

// 0.2초간격으로 typing 함수 실행
setInterval(typing, 200);




// 이미지 모션 적용
// 변수 선언
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");
const IMG_WIDTH = 400;

// 이미지 위치 변경 변수
let imgIndex = 0; 
let position = 0


// 뒤로가기 버튼 클릭 시
let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled"); 
    position += IMG_WIDTH; // + 통해 이미지 이동
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true"); //처음보이는 페이지는 뒤로가기 막히게 실행
  }
};

// 앞으로가기 버튼 클릭 시
let next = function () {
  if (imgIndex < 5) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 4) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};
init();