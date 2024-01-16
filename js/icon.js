let icons = document.querySelectorAll('.icon');
let activeIcon;


icons.forEach(function(icon){
    icon.addEventListener('mousedown', function(){
        if(activeIcon)
            removeIcon(activeIcon);
        addIcon(icon)
        activeIcon = icon;
    })
})

document.addEventListener('mousedown', function(e){
    if(activeIcon != e.target.closest('.icon')){
        removeIcon(activeIcon);
        activeIcon = null;
    }
})

document.addEventListener('mousemove', function(){
    if(isMouseDownSelectBox){
        icons.forEach(function(icon){
            if(isOverlapping(selectBox, icon)){ //idk if this is coupling
                addIcon(icon)
            } else if(icon.classList.contains('icon-active')){ //if not selected and has icon-active then deselect it. man this code is running so much for checking almost nothing. i def feel like this code sucks i need to rewrite
                removeIcon(icon);
            }
        })
    }

})

function addIcon(icon){
    icon.classList.add('icon-active');
}

function removeIcon(activeIcon){
    activeIcon.classList.remove('icon-active');
}

function isOverlapping(element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}
//i need to figure out how to seperate this classes. in mulitple im using the same dom calls which is of course not good for performance. since it's small it dont matter but you know good practise ofcourse.