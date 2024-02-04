closeButtons = document.querySelectorAll('.close');
zoomButtons = document.querySelectorAll('.zoom-big');
minimizeButtons = document.querySelectorAll('.minimize');

closeButtons.forEach(function(closeButton){
    closeButton.addEventListener('mouseup', function(){
        closeButton.closest('.draggable-window').classList.add('invisible');
    })
})

//funkytypeHAHAHHAHA
//shut up guys MONKEYTYPO IS THE BEST