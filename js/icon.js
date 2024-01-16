let icons = document.querySelectorAll('.icon');
let activeIcon;

icons.forEach(function(icon){
    icon.addEventListener('mousedown', function(){
        icon.classList.add('icon-active');
        activeIcon = icon;
    })
})

document.addEventListener('mousedown', function(e){
    if(activeIcon != e.target.closest('.icon')){
        activeIcon.classList.remove('icon-active');
    }
})


//i need to figure out how to seperate this classes. in mulitple im using the same dom calls which is of course not good for performance. since it's small it dont matter but you know good practise ofcourse.