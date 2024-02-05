closeButtons = document.querySelectorAll('.close');
zoomButtons = document.querySelectorAll('.zoom-big');
minimizeButtons = document.querySelectorAll('.minimize');

closeButtons.forEach(function(closeButton){
    closeButton.addEventListener('mouseup', function(){
        closeButton.closest('.draggable-window').classList.add('invisible');
    })
})

zoomButtons.forEach(function(zoomButton){
    zoomButton.addEventListener('mouseup', function(){
        if(zoomButton.classList.contains('maximize')){
            zoomButton.classList.remove('maximize');
            zoomButton.classList.add('minimize');

            currentWindow.style.width = window.innerWidth + 'px';
            currentWindow.style.height = window.innerHeight + 'px';
            currentWindow.style.top = 0;
            currentWindow.style.left = 0;
        } else{
            zoomButton.classList.add('maximize');
            zoomButton.classList.remove('minimize');
        }
        

        
        
    })
})

//funkytypeHAHAHHAHA
//shut up guys MONKEYTYPO IS THE BEST