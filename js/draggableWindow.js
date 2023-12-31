let windows = document.querySelectorAll('.draggable-window');

let xClickStart = 0;
let yClickStart = 0;

let currentWindow = null;
let isMouseDownWindow = false;

let norths = document.querySelectorAll('.north');
let souths = document.querySelectorAll('.south');
let easts = document.querySelectorAll('.east');
let wests = document.querySelectorAll('.west');

let isNorth = false;
let isSouth = false;
let isEast = false;
let isWest = false;

windows.forEach(function(dWindow){
    dWindow.addEventListener('mousedown', function(e){
        currentWindow = dWindow;

        if(dWindow.style.top == ''){
            dWindow.style.left = '0px';
            dWindow.style.top = '0px';
        }
        xClickStart = e.clientX - parseInt(dWindow.style.left);
        yClickStart = e.clientY - parseInt(dWindow.style.top);
    })
    dWindow.querySelector('.window-bar').addEventListener('mousedown', function(){
        isMouseDownWindow = true; // only works if mouse over window
    })
})
document.addEventListener('mousemove', function(e){
    if(isMouseDownWindow){
        currentWindow.style.top = `${(e.clientY - yClickStart)}px`;
        currentWindow.style.left = `${(e.clientX - xClickStart)}px`;
    }
    resize(isNorth, isSouth, isEast, isWest, e);
})
document.addEventListener('mouseup', function(){
    isMouseDownWindow = false;
    isNorth = false;
    isSouth = false;
    isEast = false;
    isWest = false;
})

//resize stuff

norths.forEach(function(north){
    north.addEventListener('mousedown', function(){
        isNorth = true;
    })
})
souths.forEach(function(south){
    south.addEventListener('mousedown', function(){
        isSouth = true;
    })
})
easts.forEach(function(east){
    east.addEventListener('mousedown', function(){
        isEast = true;
    })
})
wests.forEach(function(west){
    west.addEventListener('mousedown', function(){
        isWest = true;
    })
})

//seperate into two funcs
function resize(north, south, east, west, e){ //all bools
    if(north){
        currentWindow.style.top = e.clientY + 'px';
        currentWindow.style.height = (e.clientY - parseInt(currentWindow.style.top)) + 'px';
    }
    if(south){
        currentWindow.style.height = (e.clientY - parseInt(currentWindow.style.top)) + 'px';
    }
    if(east){
        currentWindow.style.width = (e.clientX - parseInt(currentWindow.style.left)) + 'px'; //redo since its same as xclickstart
    }
    if(west){
        currentWindow.style.left = e.clientX + 'px';
    }
}