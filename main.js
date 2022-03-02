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
