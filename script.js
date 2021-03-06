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

  document.getElementById('topBackButton').addEventListener('click', function(event) {
    smoothScroll(event);
  });
  
// 各メニューリストをクリックした時にメニューを閉じる処理
// forEachを使った場合
window.addEventListener('load', function(event) {

  menuLists.forEach(function(menulist) {
    menulist.addEventListener('click', function(event) {
      document.querySelector('header .headerBottomContainer').classList.remove('active');
      document.getElementById('spMenuIcon').classList.remove('active');
      document.querySelector('#mask').classList.remove('active');
      
      if(document.querySelector('body').classList.contains('home')) {
        smoothScroll(event);
      } 
    });
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


    if(document.querySelector('body').classList.contains('contactPage')) {
      return
    } else {

    
      for (let i = 0; i < showTargetresults.length; i++) {
        const showTargetElements = showTargetresults[i].getBoundingClientRect().top + showTargetresults[i].clientHeight * .2;
        if(window.innerHeight > showTargetElements) {
          showTargetresults[i].classList.add('showTarget');
        }
      }
      for (let i = 0; i < targetItemLiElements.length; i++) {
        targetItemLiElements[i].style.animationDelay = '' + (i * .5) + 's';
        const showTargetElements = targetItemLiElements[i].getBoundingClientRect().top + targetItemLiElements[i].clientHeight * .2;
        if(window.innerHeight > showTargetElements) {
          targetItemLiElements[i].classList.add('showTarget');
        }
      }
      
      for (let i = 0; i < targetPayLiElements.length; i++) {
        targetPayLiElements[i].style.animationDelay = '' + (i * .5) + 's';
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
    }
  });


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
  
  let duration = 1000;
  
  let targetPosition;
  
  // スクロール先の左上地点を取得 + ヘッダーの高さ
  
  targetPosition = document.querySelector(targetId).offsetTop;
  console.log(targetPosition)
  
  // カレント位置（クリックした位置）
  const startPosition = window.pageYOffset;
  // 距離(=スクロールをする移動距離)
  
  let distance;
  if(event.target.tagName === 'A') {
    distance = targetPosition - startPosition;
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

// モーダルウィンドウ表示
  const mask = document.getElementById('mask'),
        items = document.querySelectorAll('.itemLineUpLists > li > a'),
        modalBox = document.querySelectorAll('.modalBox'),
        mCloseBtn = document.querySelectorAll('.closeBtn');


  for(let i = 0; i < items.length; i++) {
    let targetItem = items[i];

    targetItem.addEventListener('click', e => {
      e.preventDefault();

      // モーダルウィンドウ表示
      mask.classList.add('active');
      mask.style.zIndex = `997`;
      
      if(targetItem.classList.contains('m-komusubi')) {
        modalBox[i].classList.add('active');
      } else if(targetItem.classList.contains('m-oozeki')) {
        modalBox[i].classList.add('active');
      } else {
        modalBox[i].classList.add('active');
      }
    });

  }

  // モダール閉じる処理
  mask.addEventListener('click',() => {
    mask.classList.remove('active');
    mask.style.zIndex = `1`;
    for(let i = 0; i < modalBox.length; i++) {
      modalBox[i].classList.remove('active');
    }
  });

  // モダールcloseボタンで閉じる処理
  for (let i = 0; i < mCloseBtn.length; i++) {
    mCloseBtn[i].addEventListener('click', (e) => {
      e.preventDefault();

      mask.classList.remove('active');
      mask.style.zIndex = `1`;
      for(let i = 0; i < modalBox.length; i++) {
        modalBox[i].classList.remove('active');
      }
    });
  }

}