
var HEADER = {};


/*
  headerのイメージを自動で変更する
*/

HEADER.SLIDER = {

  const: slideImage = document.getElementById('headerSlide'),   // headerに表示するimg要素
  const: navMenu = document.getElementsByClassName('nav-menu'),
  var: current = 0, // headerに表示するイメージリストのkey
  var: imageSet = [],

  // ウィンドウサイズが414px以上の時の画像セット
  const: imageList = [
    "./assets/img/feature-image-1.png",
    "./assets/img/feature-image-2.png",
    "./assets/img/feature-image-3.png",
    "./assets/img/feature-image-4.png",
    "./assets/img/feature-image-5.png",
    "./assets/img/feature-image-6.png"
  ],

  // ウィンドウサイズが414px未満の時の画像セット
  const: imageListSmall = [
    "./assets/img/feature-image-small-1.png",
    "./assets/img/feature-image-small-2.png",
    "./assets/img/feature-image-small-3.png",
    "./assets/img/feature-image-small-4.png",
  ],

  // ウィンドウサイズによって画像セットを変更する
  // 初期画像を設定する

  init: function initImage() {
    if (window.innerWidth >= 414) {
      imageSet = imageList;
    } else {
      imageSet = imageListSmall;
    }
    slideImage.src = imageSet[current];

  },

  // 一定間隔でヘッダのスライドショー送りをする
  slideshow: function autoPlay() {
    setTimeout(() => {

      if (current === imageSet.length - 1) {
        current = 0;
      } else {
        current++;
      }

      slideImage.classList.add("slideIn");
      slideImage.src = imageSet[current];
      setTimeout('slideImage.classList.remove("slideIn");', 3100);
      autoPlay();
    }, 8000);
  },
}

window.onload = HEADER.SLIDER.init();
window.onload = HEADER.SLIDER.slideshow();

/*
  ハンバーガーメニューをクリック時にナビゲーションメニューを開く
  Xボタンをクリック時にナビゲーションメニューを閉じる
*/

HEADER.NAV = {
  const: btnMenu = document.getElementById("btnMenu"),
  const: navWrapper = document.getElementById("navWrapper"),

  operation: btnMenu.onclick = () => {
    if (navWrapper.classList.contains("nav-open")) {
      navWrapper.classList.remove("nav-open");
      navWrapper.classList.add("nav-close");

      btnMenu.classList.remove("nav-open");
      btnMenu.classList.add("nav-close");

    }
    else {
      navWrapper.classList.remove("nav-close");
      navWrapper.classList.add("nav-open");

      btnMenu.classList.remove("nav-close");
      btnMenu.classList.add("nav-open");
    }
  },
}
