let icons = document.querySelectorAll('.icon');
let mouseDownOnIcon = false;
let selectedIcons = [];

document.addEventListener('mousemove', function(){
    if(isSelectBoxActive){ //checks icons to see if they are touching the selectbox
        icons.forEach(function(icon){
            if(isOverlapping(icon, selectBox)){
                if(!selectedIcons.includes(icon)){ //WEEE DOOO WEE SDODOSd
                    icon.classList.add('icon-active'); //if touching add icon-active class
                    selectedIcons.push(icon);
                }
            }else{
                icon.classList.remove('icon-active'); //if not touching then dont
                selectedIcons = selectedIcons.filter(item => item !== icon);
            }
        })
    }
})

document.addEventListener('mousedown', function(e){
    if(e.target === document.body){
        unselectAllIcons();
    }
})

icons.forEach(function(icon){
    icon.addEventListener('mousedown', function(e){
        if(!e.target.closest('.icon-active')){
            unselectAllIcons();
            icon.classList.add('icon-active');
            selectedIcons.push(icon);
        }
        
        mouseDownOnIcon = true;
    })
    icon.addEventListener('mouseup', function(){
        mouseDownOnIcon = false;
    })
})

function unselectAllIcons(){
    icons.forEach(function(icon){
        icon.classList.remove('icon-active');
    })
    selectedIcons = [];
}

function isOverlapping(element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}
