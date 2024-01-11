let windows = document.querySelectorAll('.draggable-window');

let xRelativeClickStart = 0;
let yRelativeClickStart = 0;

let currentWindow = null;
let isMouseDownWindow = false;

let windowStartWidth = 250; //temp vars for setting widht and height on start
let windowStartHeight = 250;

let onClickHeight;
let onClickWidth;


let norths = document.querySelectorAll('.northResize');
let souths = document.querySelectorAll('.southResize');
let easts = document.querySelectorAll('.eastResize');
let wests = document.querySelectorAll('.westResize');

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
            dWindow.style.width = windowStartWidth + 'px';
            dWindow.style.height = windowStartHeight + 'px';

        }
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

        if(newHeight > 50){//I NEED MIN WIDTH VAR AAAAAA I SUCK AT CODING :sob:
            currentWindow.style.height = newHeight + 'px';
            currentWindow.style.top = e.clientY + 'px';
        }else{
            currentWindow.style.top = (parseInt(currentWindow.style.top) + parseInt(currentWindow.style.height) - 50) + 'px'; //left + width - min
            currentWindow.style.height = 50 + 'px'; //love the magic numbers
        } 
    }
    if(south){
        let newHeight = e.clientY - parseInt(currentWindow.style.top);
        if(newHeight < 50){
            newHeight = 50; //i feel like UGHGUOSKJFHSDLFS: i dont like this code it - it hurts me for some reason
        }
        currentWindow.style.height = newHeight + 'px';
    }
    if(east){
        let newWidth = (e.clientX - parseInt(currentWindow.style.left)); //redo since its same as xclickstart
        if(newWidth < 50)
            newWidth = 50;
        currentWindow.style.width = newWidth + 'px';
    }
    if(west){
        let newWidth = (e.clientX - parseInt(currentWindow.style.left)); //neweight is the distance between the mouse and the top of the window
        newWidth = -(newWidth - parseInt(currentWindow.style.width)); //since we're going up the height will be negative (so we reverse taht) then we subtract (from the negative height (so it adds)) the height of the window on first click. before i had - 50 for min height but now it will adjust the window based on its height

        if(newWidth > 50){//I NEED MIN WIDTH VAR AAAAAA I SUCK AT CODING :sob:
            currentWindow.style.width = newWidth + 'px';
            currentWindow.style.left = e.clientX + 'px';
        }else{
            currentWindow.style.left = (parseInt(currentWindow.style.left) + parseInt(currentWindow.style.width) - 50) + 'px'; //left + width - min
            currentWindow.style.width = 50 + 'px'; //love the magic numbers
        } //this is tricky bc i cant just set the width to 50 i need to move the left back to 50 away from the right side AAAs
    }
}