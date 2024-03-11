icons.forEach(function(icon){
    icon.addEventListener('dblclick', function(){
        let dblClickWindowId = '#window-' + icon.id.slice(-1);
        let dblClickWindow = document.querySelector(dblClickWindowId);

        if(dblClickWindow && dblClickWindow.classList.contains('invisible')){ // if its invis
            dblClickWindow.style.top = 200 + 'px';
            dblClickWindow.style.left = 500 + 'px'; //NEED TO CREATE VAR FOR THIS!!! AND VARIATIONS
            dblClickWindow.style.width = 300 + 'px';
            dblClickWindow.style.helight = 200 + 'px';

            dblClickWindow.classList.remove('invisible'); //make it so you can see it
        }
    })
})