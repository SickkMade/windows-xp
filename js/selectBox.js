const selectBox = document.getElementById('select-box');
let isMouseDownSelectBox = false;

let startX = 0;
let startY = 0;

document.addEventListener('mousedown', function(e){
    if(e.target === document.body){
        startX = e.clientX;
        startY = e.clientY;
        selectBox.style.left = startX + 'px';
        selectBox.style.top = startY + 'px';
        selectBogitx.style.width = 0;
        selectBox.style.height = 0;
        selectBox.style.opacity = '1';
        isMouseDownSelectBox = true;
    }
})

document.addEventListener('mouseup', function(){
    selectBox.style.opacity = '0';
    selectBox.style.width = 0;
    selectBox.style.height = 0;
    isMouseDownSelectBox = false;
})

document.addEventListener('mousemove', function(e){
    if(isMouseDownSelectBox){
        let width = e.clientX - startX; //no abs because we need to know WHEN x and y is negative to change top and left
        let height = e.clientY - startY;

        // Adjust position if dragging to the left or up
        if (width < 0) {
            selectBox.style.left = e.clientX + 'px';
            width = -width;
        }
        if (height < 0) {
            selectBox.style.top = e.clientY + 'px';
            height = -height; // hight WOULD be negative if to the left. turns to final-initial with *-1
        } 

        selectBox.style.width = width + 'px';
        selectBox.style.height = height + 'px';
    }
})