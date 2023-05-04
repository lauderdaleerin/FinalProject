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

