let windows = document.querySelectorAll('.draggable-window');

let xClickStart = 0;
let yClickStart = 0;

let currentWindow = null;
let isMouseDown = false;

windows.forEach(function(dWindow){
    dWindow.addEventListener('mousedown', function(e){
        xClickStart = e.clientX;
        yClickStart = e.clientY;

        currentWindow = dWindow;
        isMouseDown = true; // only works if mouse over window
    })
})

document.addEventListener('mousemove', function(e){
    if(isMouseDown){
        currentWindow.style.top = `${(e.clientY - yClickStart)}px`;
        currentWindow.style.left = `${(e.clientX - xClickStart)}px`;
    }
})
document.addEventListener('mouseup', function(){
    isMouseDown = false;
})