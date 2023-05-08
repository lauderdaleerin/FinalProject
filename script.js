var h = window.innerHeight;

var navbarDark = document.getElementById('navbarDark');
window.onscroll = function () { 
    if (document.body.scrollTop <= h ) {
        navbarDark.classList.add("visible");
        navbarDark.classList.remove("invisible");
    } 
    else {
        navbarDark.classList.add("invisible");
        navbarDark.classList.remove("visible");
    }
};

var navbarLight = document.getElementById('navbarLight');
window.onscroll = function () { 
    if (document.body.scrollTop <= h ) {
        navbarLight.classList.add("invisible");
        navbarLight.classList.remove("visible");
    } 
    else {
        navbarLight.classList.add("visible");
        navbarLight.classList.remove("invisible");
    }
};



const videoEl = document.getElementById('herom')
const navbarEl = document.getElementById('navbarDark')

videoEl.addEventListener('play', () => {
  navbarEl.classList.add('invisible')
})

videoEl.addEventListener('pause', () => {
  navbarEl.classList.remove('invisible')
})



const videoElw = document.getElementById('herow')
const navbarElw = document.getElementById('navbarDark')

videoElw.addEventListener('play', () => {
  navbarElw.classList.add('invisible')
})

videoElw.addEventListener('pause', () => {
  navbarElw.classList.remove('invisible')
})


function changeImageone() {
  var imageone = document.getElementById('ex1');
  if (imageone.src.match("images/immersive-area-2.jpg")) {
      imageone.src = "images/immersive-area-2b.png";
  }
  else {
      imageone.src = "images/immersive-area-2.jpg";
  }
}

function changeImagetwo() {
  var imageone = document.getElementById('ex2');
  if (imageone.src.match("images/immersive-area-3.jpg")) {
      imageone.src = "images/immersive-area-3b.png";
  }
  else {
      imageone.src = "images/immersive-area-3.jpg";
  }
}