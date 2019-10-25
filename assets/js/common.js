'use strict'

{
  // /*
  //   headerのイメージを自動で変更する
  // */

  // ウィンドウ幅が415px以上の時の画像セット
  const imageSetLarge = [
    "./assets/img/feature-image-1.png",
    "./assets/img/feature-image-2.png",
    "./assets/img/feature-image-3.png",
    "./assets/img/feature-image-4.png",
    "./assets/img/feature-image-5.png",
    "./assets/img/feature-image-6.png"
  ];

  // ウィンドウ幅が414px以下の時の画像セット
  const imageSetSmall = [
    "./assets/img/feature-image-small-1.png",
    "./assets/img/feature-image-small-2.png",
    "./assets/img/feature-image-small-3.png",
    "./assets/img/feature-image-small-4.png",
  ];

  // imgに適用する画像セットをウィンドウ幅から判定
  const targetImageSet = window.innerWidth > 414 ? imageSetLarge.slice() : imageSetSmall.slice();

  let currentNum = 0;
  const slideImage = document.getElementById('headerSlide');


  function setSlideImage() {
    slideImage.src = targetImageSet[currentNum];
  }

  function autoPlay() {
    slideImage.classList.add("slideIn");
    setSlideImage();

    setTimeout(() => {
      slideImage.classList.remove("slideIn");
    }, 3100);

    setTimeout(() => {
      if (currentNum === targetImageSet.length - 1) {
        currentNum = 0;
      } else {
        currentNum++;
      }
      autoPlay();
    }, 8000);
  }

  autoPlay();

  // /*
  //   ハンバーガーメニューをクリック時にナビゲーションメニューを開く
  //   Xボタンをクリック時にナビゲーションメニューを閉じる
  // */
  const btnMenu = document.getElementById('btnMenu');
  const navWrapper = document.getElementById('navWrapper');

  btnMenu.addEventListener('click', () => {

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
  })

}


