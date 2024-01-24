let xIconOffset = [];
let yIconOffset = [];
let isIconSelected = false;

icons.forEach(function(icon){
    icon.addEventListener('mousedown', function(e){
        isIconSelected = e.target.closest('.icon');
        if(isIconSelected){
            for(i = 0; i < selectedIcons.length; i++){
                rect = selectedIcons[i].getBoundingClientRect(); //this is like style.top
                iconStyle = window.getComputedStyle(selectedIcons[i]); //set in css file PLEASE REMAKE THIS SUCKS
                xIconOffset[i] = (e.clientX - rect.left + parseInt(iconStyle.getPropertyValue('left')));
                yIconOffset[i] = (e.clientY - rect.top + parseInt(iconStyle.getPropertyValue('top')));
            }
        }
    })
})

document.addEventListener('mouseup', function(){
    isIconSelected = false;
})
document.addEventListener('mousemove', function(e){
    if(isIconSelected){
        for(let i = 0; i < selectedIcons.length; i++){
            let xMove = e.clientX - xIconOffset[i];
            let yMove = e.clientY - yIconOffset[i];
            selectedIcons[i].style.transform = `translate(${xMove}px, ${yMove}px)`;
        }
    }
})