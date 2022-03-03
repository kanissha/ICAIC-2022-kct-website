const tracksContent = document.getElementsByClassName('tracks_content'),
      tracksHeader = document.querySelectorAll('.tracks_header')

function toggletracks() {
    let itemClass = this.parentNode.className

    for(i=0 ; i < tracksContent.length ; i++){
        tracksContent[i].className = 'tracks_content tracks_close'
    }
    if(itemClass === 'tracks_content tracks_close'){
        this.parentNode.className = 'tracks_content tracks_open'
    }
}
tracksHeader.forEach((el) => {
    el.addEventListener('click', toggletracks)
})
// mobile navibar toggle
const navButtonTog = document.getElementById('mobile-nav-toggle'),
    navButton = document.getElementById('nav-button-sym'),
    navMobLinks = document.querySelectorAll('.nav-mobile-link'),
    navShow = document.getElementById('mobile-nav'),
    navBackground = document.getElementById('mobile-body-overlay');

function toggleNav() {
    if(navShow.className === 'mobile-nav'){
        navButton.className = 'uil uil-unlock';
        navShow.className = 'mobile-nav toggle-show';
        navBackground.className = 'toggle-show';
    }
    else{
        navButton.className = 'uil uil-lock';
        navShow.className = 'mobile-nav';
        navBackground.className = 'toggle-off';
    }

}
function togglemob() {
    navButton.className = 'uil uil-lock';
    navShow.className = 'mobile-nav';
    navBackground.className = 'toggle-off';
}
navBackground.addEventListener('click', togglemob);
navMobLinks.forEach((el) => {
    el.addEventListener('click', togglemob)
})
navButtonTog.addEventListener('click', toggleNav);