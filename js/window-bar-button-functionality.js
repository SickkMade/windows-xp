closeButtons = document.querySelectorAll('.close');
zoomButtons = document.querySelectorAll('.zoom-big');
minimizeButtons = document.querySelectorAll('.minimize');

closeButtons.forEach(function(closeButton){
    closeButton.addEventListener('mouseup', function(){
        closeButton.closest('.draggable-window').classList.add('invisible');
        isFullScreen = false;
    })
})

zoomButtons.forEach(function(zoomButton){
    zoomButton.addEventListener('mouseup', function(){
        if(zoomButton.classList.contains('zoom-big')){
            zoomButton.classList.remove('zoom-big');
            zoomButton.classList.add('zoom-small');

            isFullScreen = true;

            currentWindow.style.width = window.innerWidth + 'px';
            currentWindow.style.height = window.innerHeight + 'px';
            currentWindow.style.top = 0;
            currentWindow.style.left = 0;
        } else{
            isFullScreen = false;

            currentWindow.style.width = currentWindowRect.width  + 'px';
            currentWindow.style.height = currentWindowRect.height + 'px';
            currentWindow.style.top = currentWindowRect.top + 'px';
            currentWindow.style.left = currentWindowRect.left + 'px';


            zoomButton.classList.add('zoom-big');
            zoomButton.classList.remove('zoom-small');
        }
    })
})

minimizeButtons.forEach(function(minimizeButton){
    minimizeButton.addEventListener("mouseup", function(){
        isFullScreen = false;
        currentWindow.classList.add('invisible')
        addActiveFooter(document.querySelector('#footer-' + currentWindow.id.slice(-1))); //wtf is this shit :sob:
    })
})

//funkytypeHAHAHHAHA
//shut up guys MONKEYTYPO IS THE BEST