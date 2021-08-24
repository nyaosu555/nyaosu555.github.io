'use strict';
{

// ハンバーガーメニュー処理
const spMenuIcon = document.getElementById('spMenuIcon');

spMenuIcon.addEventListener('click', function() {
  document.querySelector('header .headerBottomContainer').classList.toggle('active');
  document.getElementById('spMenuIcon').classList.toggle('active');
  document.querySelector('#mask').classList.toggle('active');

});

// トップへ戻る機能

  const menuLists = document.querySelectorAll('.home header .headerBottomContainer > nav ul li a');
  
  menuLists.forEach(function(menuList) {
    menuList.addEventListener('click', function(event) {
      smoothScroll(event);
    });
  });

  document.getElementById('topBackButton').addEventListener('click', function(event) {
    smoothScroll(event);
  });
  
// 各メニューリストをクリックした時にメニューを閉じる処理
// forEachを使った場合
menuLists.forEach(function(menulist) {
  menulist.addEventListener('click', function() {
    document.querySelector('header .headerBottomContainer').classList.remove('active');
    document.getElementById('spMenuIcon').classList.remove('active');
    document.querySelector('#mask').classList.remove('active');
  });
});




// // スクロール処理
let documentElement = null;
let scrollYNum = 0;

const targetElements = document.querySelectorAll('.sectionTitle');
const infomationsDl = document.querySelector('.infomations');
const conceptText = document.querySelector('.conceptText');
const conceptImage = document.querySelector('.conceptImage');
const banduke = document.querySelector('.banduke');
const targetItemLiElements = document.querySelectorAll('.itemLineUpLists > li');
const notices = document.querySelectorAll('.notice');
const targetPayLiElements = document.querySelectorAll('.payLists > li');

let showTargetresults = [
  infomationsDl,
  conceptText,
  conceptImage,
  banduke,
];

for (let i = 0; i < targetItemLiElements.length; i++) {
  targetItemLiElements[i].style.animationDelay = '' + (i * .5) + 's';
}

for (let i = 0; i < targetPayLiElements.length; i++) {
  targetPayLiElements[i].style.animationDelay = '' + (i * .5) + 's';
}


if(document.querySelector('body').classList.contains('home')) {  

  window.addEventListener('scroll', function(e) {
    
    if(navigator.userAgent.toLowerCase().match(/webkit|msie 5/)) {
    if(navigator.userAgent.indexOf('Chrome') !== -1) {
      scrollYNum = window.scrollY;
    } else {
      scrollYNum = window.scrollY;
    }
    } else {
    scrollYNum = document.documentElement.scrollTop;
    }
  
  // トップへ戻るボタンを表示する
    if(scrollYNum > 250) {
      document.getElementById('topBackButton').classList.add('active');
    } else {
      document.getElementById('topBackButton').classList.remove('active');
    }

    for (let i = 0; i < showTargetresults.length; i++) {
      const showTargetElements = showTargetresults[i].getBoundingClientRect().top + showTargetresults[i].clientHeight * .2;
      if(window.innerHeight > showTargetElements) {
        showTargetresults[i].classList.add('showTarget');
      }
    }
    for (let i = 0; i < targetItemLiElements.length; i++) {
      const showTargetElements = targetItemLiElements[i].getBoundingClientRect().top + targetItemLiElements[i].clientHeight * .2;
      if(window.innerHeight > showTargetElements) {
        targetItemLiElements[i].classList.add('showTarget');
      }
    }
    
    for (let i = 0; i < targetPayLiElements.length; i++) {
      const showTargetElements = targetPayLiElements[i].getBoundingClientRect().top + targetPayLiElements[i].clientHeight * .2;
      if(window.innerHeight > showTargetElements) {
        targetPayLiElements[i].classList.add('showTarget');
      }
    }
    
    for (let i = 0; i < notices.length; i++) {
      const showTargetElements = notices[i].getBoundingClientRect().top + notices[i].clientHeight * .2;
      if(window.innerHeight > showTargetElements) {
        notices[i].classList.add('showTarget');
      }
    }
  
  });
}

function smoothScroll(event) {

  event.preventDefault();

  let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  
  let targetId;
  if(event.target.tagName === 'A') {
    targetId = event.currentTarget.getAttribute('href');
    if(targetId.includes('/')) {
      targetId = targetId.replace('/', '');
    }
  } 
  
  if(event.target.tagName === 'IMG') {
    targetId = 'header';
  }
  
  const duration = 1000;

  let targetPosition;

  // スクロール先の左上地点を取得
  targetPosition = document.querySelector(targetId).offsetTop;
console.log(targetId)
console.log(targetPosition)
  // if(targetItemLiElements[0].classList.contains('showTarget')) {
  //   targetPosition = document.querySelector(targetId).offsetTop;
  // }else {
  //     targetPosition = document.querySelector(targetId).offsetTop + 550;
  // }
 
  // カレント位置（クリックした位置）
  const startPosition = window.pageYOffset;
  // 距離(=スクロールをする移動距離)
  
  let distance;
  if(event.target.tagName === 'A') {
    distance = targetPosition - startPosition - 150;
  }
  if(event.target.tagName === 'IMG'){
    distance = targetPosition - startPosition;
  }

  let start = null;

  requestAnimationFrame(step);

  function step(timestamp) {
    if(!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
    if(progress < duration) requestAnimationFrame(step);
  }

  function easeInOut(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

}

}