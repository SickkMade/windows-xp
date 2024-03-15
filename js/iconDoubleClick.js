icons.forEach(function(icon){
    icon.addEventListener('dblclick', function(){
        let index = icon.id.slice(-1);
        let iconFooter = document.querySelector('#footer-' + index)
        let dblClickWindow = document.querySelector('#window-' + index);

        if(dblClickWindow && dblClickWindow.classList.contains('invisible') && iconFooter.classList.contains('invisible')){ // if its invis
            dblClickWindow.style.top = 200 + 'px';
            dblClickWindow.style.left = 500 + 'px'; //NEED TO CREATE VAR FOR THIS!!! AND VARIATIONS
            dblClickWindow.style.width = 300 + 'px';
            dblClickWindow.style.height = 200 + 'px';
            windowVisible(dblClickWindow, true) //make it so you can see it
        }
    })
})