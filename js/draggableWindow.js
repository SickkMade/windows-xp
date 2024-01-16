let windows = document.querySelectorAll('.draggable-window');

let xRelativeClickStart = 0;
let yRelativeClickStart = 0;

let currentWindow = null;
let isMouseDownWindow = false;

let onClickHeight;
let onClickWidth;

let windowCompStyles = window.getComputedStyle(windows[0]);
//i hope we always have atleast one window

let norths = document.querySelectorAll('.northResize');
let souths = document.querySelectorAll('.southResize');
let easts = document.querySelectorAll('.eastResize');
let wests = document.querySelectorAll('.westResize');

let isNorth = false;
let isSouth = false;
let isEast = false;
let isWest = false;

const windowMinWidth = windowCompStyles.getPropertyValue('min-width');
const windowMinHeight = windowCompStyles.getPropertyValue('min-height');
const windowStartHeight = windowCompStyles.getPropertyValue('height');
const windowStartWidth = windowCompStyles.getPropertyValue('width');
const windowStartTop = windowCompStyles.getPropertyValue('top');
const windowStartLeft = windowCompStyles.getPropertyValue('left');

windows.forEach(function(dWindow){
    dWindow.style.left = windowStartLeft;
    dWindow.style.top = windowStartTop;
    dWindow.style.width = windowStartWidth;
    dWindow.style.height = windowStartHeight;
    dWindow.addEventListener('mousedown', function(e){
        currentWindow = dWindow;

        onClickHeight = parseInt(dWindow.style.height);
        onClickHeight = parseInt(dWindow.style.width);
        xRelativeClickStart = e.clientX - parseInt(dWindow.style.left);
        yRelativeClickStart = e.clientY - parseInt(dWindow.style.top);
    })
    dWindow.querySelector('.window-bar').addEventListener('mousedown', function(){
        isMouseDownWindow = true; // only works if mouse over window
    })
})
document.addEventListener('mousemove', function(e){
    if(isMouseDownWindow){
        currentWindow.style.top = `${(e.clientY - yRelativeClickStart)}px`;
        currentWindow.style.left = `${(e.clientX - xRelativeClickStart)}px`;
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

//seperate into two funcs but im lazy mwahahaha
function resize(north, south, east, west, e){ //all bools
    if(north){
        let newHeight = (e.clientY - parseInt(currentWindow.style.top)); //neweight is the distance between the mouse and the top of the window
        newHeight = -(newHeight - parseInt(currentWindow.style.height)); //since we're going up the height will be negative (so we reverse taht) then we subtract (from the negative height (so it adds)) the height of the window on first click. before i had - 50 for min height but now it will adjust the window based on its height

        if(newHeight > parseInt(windowMinHeight)){//I NEED MIN WIDTH VAR AAAAAA I SUCK AT CODING :sob:
            currentWindow.style.height = newHeight + 'px';
            currentWindow.style.top = e.clientY + 'px';
        }else{
            currentWindow.style.top = (parseInt(currentWindow.style.top) + parseInt(currentWindow.style.height) - parseInt(windowMinHeight)) + 'px'; //left + width - min
            currentWindow.style.height = windowMinHeight; //love the magic numbers
        } 
    }
    if(south){
        let newHeight = e.clientY - parseInt(currentWindow.style.top);
        if(newHeight < parseInt(windowMinHeight)){
            newHeight = parseInt(windowMinHeight); //i feel like UGHGUOSKJFHSDLFS: i dont like this code it - it hurts me for some reason
        }
        currentWindow.style.height = newHeight + 'px';
    }
    if(east){
        let newWidth = (e.clientX - parseInt(currentWindow.style.left)); //redo since its same as xclickstart
        if(newWidth < parseInt(windowMinWidth))
            newWidth = parseInt(windowMinWidth);
        currentWindow.style.width = newWidth + 'px';
    }
    if(west){
        let newWidth = (e.clientX - parseInt(currentWindow.style.left)); //neweight is the distance between the mouse and the top of the window
        newWidth = -(newWidth - parseInt(currentWindow.style.width)); //since we're going up the height will be negative (so we reverse taht) then we subtract (from the negative height (so it adds)) the height of the window on first click. before i had - 50 for min height but now it will adjust the window based on its height

        if(newWidth > parseInt(windowMinWidth)){//I NEED MIN WIDTH VAR AAAAAA I SUCK AT CODING :sob:
            currentWindow.style.width = newWidth + 'px';
            currentWindow.style.left = e.clientX + 'px';
        }else{
            currentWindow.style.left = (parseInt(currentWindow.style.left) + parseInt(currentWindow.style.width) - parseInt(windowMinWidth)) + 'px'; //left + width - min
            currentWindow.style.width = windowMinWidth; //love the magic numbers
        } //this is tricky bc i cant just set the width to 50 i need to move the left back to 50 away from the right side AAAs
    }
}

//do a .onload to set some conditionals when the window event is created! instead of doing it on mouse click
//stop window bar from going below the task bar or above the top.