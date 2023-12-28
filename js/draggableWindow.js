let windows = document.querySelectorAll('.draggable-window');

let xClickStart = 0;
let yClickStart = 0;

let currentWindow = null;
let isMouseDownWindow = false;

windows.forEach(function(dWindow){
    dWindow.querySelector('.window-bar').addEventListener('mousedown', function(e){
        if(dWindow.style.top == ''){
            dWindow.style.left = '0px';
            dWindow.style.top = '0px';
        }
        xClickStart = e.clientX - parseInt(dWindow.style.left);
        yClickStart = e.clientY - parseInt(dWindow.style.top);

        currentWindow = dWindow;
        isMouseDownWindow = true; // only works if mouse over window
    })
})
document.addEventListener('mousemove', function(e){
    if(isMouseDownWindow){
        currentWindow.style.top = `${(e.clientY - yClickStart)}px`;
        currentWindow.style.left = `${(e.clientX - xClickStart)}px`;
    }
})
document.addEventListener('mouseup', function(){
    isMouseDownWindow = false;
})