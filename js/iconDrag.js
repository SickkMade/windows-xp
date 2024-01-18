icons.forEach(function(icon){
    icon.addEventListener('mousemove', function(e){ // i should have a central file that sets the events to vars to make more readable perhaps? ill have to ask around to see how people handle these large js projecyts
        if(mouseDownOnIcon){
            icon.style.top = e.clientY;
            icon.style.left = e.clientX;
        }
    })
})