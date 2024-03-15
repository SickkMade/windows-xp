let xRelativeClickStart = 0;
let yRelativeClickStart = 0;

let currentWindow = null;
let isMouseDownWindow = false;

let onClickHeight;
let onClickWidth;

let isFullScreen = false;
let currentWindowRect = null;

let maxZIndex = 1;
let taskbar = document.getElementById('taskbar');
//i hope we always have atleast one window

let norths = document.querySelectorAll('.northResize');
let souths = document.querySelectorAll('.southResize');
let easts = document.querySelectorAll('.eastResize');
let wests = document.querySelectorAll('.westResize');

let isNorth = false;
let isSouth = false;
let isEast = false;
let isWest = false;

let windowMinHeight = 200; //NEED TO UPDATE TO DYNAMIC PER PROGRAM :SOB:
let windowMinWidth = 200;

windows.forEach(function(dWindow){
    dWindow.addEventListener('mousedown', function(e){
        currentWindow = dWindow;
        if(!isFullScreen){
            currentWindow.style.zIndex = maxZIndex++;
            taskbar.style.zIndex = maxZIndex; //THIS IS BAD... REWRITE //i want in own little like thing

            currentWindowRect = currentWindow.getBoundingClientRect();

            onClickHeight = currentWindowRect.height;
            onClickWidth = currentWindowRect.width;
            xRelativeClickStart = e.clientX - currentWindowRect.left;
            yRelativeClickStart = e.clientY - currentWindowRect.top; 
        }
        
    })
    dWindow.querySelector('.window-bar').addEventListener('mousedown', function(e){
        if(!e.target.classList.contains('window-bar-button')) //if we're not pressing on window bar buttons
            isMouseDownWindow = true; // only works if mouse over window
    })
})
document.addEventListener('mousemove', function(e){
    if(isMouseDownWindow && !isFullScreen){
        currentWindow.style.top = `${(e.clientY - yRelativeClickStart)}px`;
        currentWindow.style.left = `${(e.clientX - xRelativeClickStart)}px`;
    }
    if(currentWindow && !isFullScreen)
        resize(currentWindowRect, e);
})
document.addEventListener('mouseup', function(){
    isMouseDownWindow = false;
    currentWindow = null;
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
function resize(rect, e){ //all bools
    if(isNorth){
        let newHeight = rect.top - e.clientY + rect.height; //neweight is the distance between the mouse and the top of the window
        if(newHeight > windowMinHeight){//I NEED MIN WIDTH VAR AAAAAA I SUCK AT CODING :sob:
            currentWindow.style.height = newHeight + 'px';
            currentWindow.style.top = e.clientY + 'px';
        }else
            currentWindow.style.height = windowMinHeight + 'px'; //love the magic numbers
    }
    if(isSouth){
        let newHeight = e.clientY - rect.top;
        if(newHeight < windowMinHeight)
            newHeight = windowMinHeight; //i feel like UGHGUOSKJFHSDLFS: i dont like this code it - it hurts me for some reason
        currentWindow.style.height = newHeight + 'px';
    }
    if(isEast){
        let newWidth = (e.clientX - rect.left); //redo since its same as xclickstart
        if(newWidth < windowMinWidth)
            newWidth = windowMinWidth;
        currentWindow.style.width = newWidth + 'px';
    }
    if(isWest){
        let newWidth = rect.left - e.clientX + rect.width; //neweight is the distance between the mouse and the top of the window
        if(newWidth > windowMinWidth){
            currentWindow.style.width = (rect.left - e.clientX + rect.width) + 'px';
            currentWindow.style.left = e.clientX + 'px';
        }else
            currentWindow.style.width = windowMinWidth; //love the magic numbers
    }
}
function changeActiveCSS(w, n){//window number
    if(w)
        w.style.opacity = n;
}

function windowVisible(wind, wantVisible){ //window boolean
    if(wantVisible){
        wind.classList.remove('invisible');
        wind.style.zIndex = maxZIndex++;
    }
    else{
        wind.classList.add('invisible');
    }
}

//ItS SO OVER !!11! any way;git 

//do a .onload to set some conditionals when the window event is created! instead of doing it on mouse click
//stop window bar from going below the task bar or above the top.
//stop window buttons from lighting up when resizing