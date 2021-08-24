
// // トップページ以外のページではローディング非表示
// if(!document.querySelector('body').classList.contains('home')) {
//   document.getElementById('loading').style.display = `none`;
// }

// // ローディング処理
// function loaded() {
//   document.getElementById('loading').classList.remove('active');
//   // トップビジュアルのアニメーションをするためにローディング後にクラスを付与
//   document.getElementById('animationTarget').classList.add('show');
// }

// window.addEventListener('load', function() {
//   setTimeout(loaded, 1200);
// });

// setTimeout(loaded, 5000);
// setTimeout(scrollTo, 100, 0, 1);


// ハンバーガーメニュー処理
const spMenuIcon = document.getElementById('spMenuIcon');

spMenuIcon.addEventListener('click', function() {
  document.querySelector('header .headerBottomContainer').classList.toggle('active');
  document.getElementById('spMenuIcon').classList.toggle('active');
  document.querySelector('#mask').classList.toggle('active');

});

// トップへ戻る機能
document.getElementById('topBackButton').addEventListener('click', function(event) {
  smoothScroll(event);
});

const menuLists = document.querySelectorAll('.headerBottomContainer > nav ul li a');

menuLists.forEach(function(menuList) {
  menuList.addEventListener('click', function(event) {
    smoothScroll(event);
  });
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

// // for文を使った場合
// for (let i = 0; i < menuLists.length; i++) {
//   menuLists[i].addEventListener('click', function(event) {
//     if(menuLists[i].textContent === 'お問い合わせ') {
//       return;
//     }
//     document.querySelector('header .container').classList.remove('open');
//     document.querySelector('#mask').classList.remove('active');

//     if(document.querySelector('body').classList.contains('home')) {
//       smoothScroll(event);
//     } 
//   });
  
// }


// // テキストアニメーション
// // const targetTextsAnimation = document.querySelectorAll('.textAnimation');

// // for (let i = 0; i < targetTextsAnimation.length; i++) {
// //   const targetElement = targetTextsAnimation[i];
// //   const text = targetElement.textContent;
// //   const textsArray = [];
  
// //   targetElement.textContent = '';

  
// //   for (let j = 0; j < text.split('').length; j++) {
// //     if(text.split('')[j] === ' ') {
// //       textsArray.push(' ');
// //     } else {
// //       textsArray.push('<span style="animation-delay: ' + ((j * .2) + .3) + 's;">' + text.split('')[j] + '</span>');
// //       // textsArray.push('<span><span style="animation-delay: ' + ((j * .2) + .3) + 's;">' + text.split('')[j] + '</span></span>');
// //     }
// //   }

// //   for (let j = 0; j < textsArray.length; j++) {
// //     targetElement.innerHTML += textsArray[j];
    
// //   }
// // }

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

console.log(targetPayLiElements)

for (let i = 0; i < targetItemLiElements.length; i++) {
  targetItemLiElements[i].style.animationDelay = '' + (i * .5) + 's';
}

for (let i = 0; i < targetPayLiElements.length; i++) {
  targetPayLiElements[i].style.animationDelay = '' + (i * .5) + 's';
}

//   let results = [];
//   let results2= [];
//   const UL = document.querySelectorAll('.cards');

//   for (let i = 0; i < UL.length; i++) {
//     results.push(UL[i]);
//     const targetLi = results[i].querySelectorAll('.cardItem');
//     for (let j = 0; j < targetLi.length; j++) {
//       targetLi[j].style.animationDelay = ' ' +(j * 0.2) + 's';
//       results2.push(targetLi[j])
//     }
//   }

// const targetResultUlElement = document.querySelector('.fishingResultInformation .container .cards'),
//       targetHelpUlElement = document.querySelector('.fishingHelpInformation .container .cards'),
//       targetSpotUlElement = document.querySelector('.fishingSpotInformation .container .cards');

// const targetUlElements = [
//   targetResultUlElement,
//   targetHelpUlElement,
//   targetSpotUlElement,
// ];

// const testArray = [];

// for (let i = 0; i < targetUlElements.length; i++) {
//   const targetLiElements = targetUlElements[i].querySelectorAll('.cardItem');
//   for (let j = 0; j < targetLiElements.length; j++) {
//     targetLiElements[j].style.animationDelay = ' ' +(j * 0.2) + 's';
//     testArray.push(targetLiElements[j]);
//   }
// }

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

  // スクロールでテキストアニメーション発動
  // sectionTitle
  // for (let i = 0; i < targetElements.length; i++) {
  //   const test = targetElements[i].getBoundingClientRect().top + targetElements[i].clientHeight * .5;
  //   if(window.innerHeight > test) {
  //     targetElements[i].classList.add('showAnimation');
  //   }
  // }

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

function smoothScroll(event) {

  event.preventDefault();

  let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  
  let targetId;
  if(event.target.tagName === 'A') {
    targetId = event.currentTarget.getAttribute('href');
    if(targetId.includes('/')) {
      targetId = targetId.replace('/', '');
    }
  } else if(event.target.tagName === 'IMG') {
    targetId = 'header';
  }
  
  const duration = 1000;
  // スクロール先の左上地点を取得
  const targetPosition = document.querySelector(targetId).offsetTop;
  // カレント位置（クリックした位置）
  const startPosition = window.pageYOffset;
  // 距離(=スクロールをする移動距離)
  
  let distance;
  if(event.target.tagName === 'A') {
    distance = targetPosition - startPosition - 150;
  } else if(event.target.tagName === 'IMG'){
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
