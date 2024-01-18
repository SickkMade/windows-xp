let icons = document.querySelectorAll('.icon');
let activeIcon = null;

document.addEventListener('mousemove', function(){
    if(isSelectBoxActive){ //checks icons to see if they are touching the selectbox
        icons.forEach(function(icon){
            if(isOverlapping(icon, selectBox)){
                icon.classList.add('icon-active'); //if touching add icon-active class
            }else{
                icon.classList.remove('icon-active'); //if not touching then dont
            }
        })
    }
})

document.addEventListener('mousedown', function(e){
    if(e.target === document.body && activeIcon){
        activeIcon.classList.remove('icon-active');
        activeIcon = null;
    }
})

icons.forEach(function(icon){
    icon.addEventListener('mousedown', function(){
        if(activeIcon)
            activeIcon.classList.remove('icon-active');
        icon.classList.add('icon-active');
        activeIcon = icon;
    })
})

function isOverlapping(element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}