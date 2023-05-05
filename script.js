var navbarDark = document.getElementById('navbarDark');
window.onscroll = function () { 
    if (document.body.scrollTop <= 1200 ) {
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
    if (document.body.scrollTop <= 1200 ) {
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

