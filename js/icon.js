let icons = document.querySelectorAll('.icon');
let activeIcons = []; //dyanmic list of every icon that is activated


icons.forEach(function(icon){
    icon.addEventListener('mousedown', function(){
        if(activeIcons != []) //if their are active icons
            removeAllActiveIcons(); //delete them all
        addActiveIconClass(icon) //add the new clicked icon
        activeIcons.unshift(icon);
    })
})

document.addEventListener('mousedown', function(e){
    if(!e.target.closest('.icon')){  //wehn you click off of icon
            removeAllActiveIcons();
            activeIcons = [];
    }
})

document.addEventListener('mousemove', function(){
    if(isMouseDownSelectBox){
        icons.forEach(function(icon){
            if(isOverlapping(selectBox, icon)){ //idk if this is coupling
                addActiveIconClass(icon)
                activeIcons.unshift(icon);
            } else if(icon.classList.contains('icon-active')){ //if not selected and has icon-active then deselect it. man this code is running so much for checking almost nothing. i def feel like this code sucks i need to rewrite
                icon.classList.remove('icon-active');
            }
        })
    }
})

function addActiveIconClass(icon){
    icon.classList.add('icon-active');
}

function removeAllActiveIcons(){
    activeIcons.forEach(function(activeIcon){
        activeIcon.classList.remove('icon-active');
    })
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