
// headerのスライドイメージリスト
const slideImageList = [
  "./assets/img/feature-image-1.png",
  "./assets/img/feature-image-2.png",
  "./assets/img/feature-image-3.png",
  "./assets/img/feature-image-4.png",
  "./assets/img/feature-image-5.png",
  "./assets/img/feature-image-6.png"
];


const slideImage = document.getElementById('header-slide');   // headerに表示するimg要素
var current = 0; // headerに表示するイメージリストのkey

function autoPlay() {

  setTimeout(function () {

    if (current === slideImageList.length - 1) {
      current = 0;
    } else {
      current++;
    }

    slideImage.classList.add("slideIn");
    slideImage.src = slideImageList[current];
    setTimeout('slideImage.classList.remove("slideIn");', 3100);

    autoPlay();
  }, 8000);
}

window.onload = autoPlay();
