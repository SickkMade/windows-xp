let iconNames = [
    {name:"Internet Explorer", src:"images/icons/internet-explorer.png"},
    {name:"Minesweeper", src:"images/icons/minesweeper.png"},
    {name:"My Computer", src:"images/icons/mypc.png"},
    {name:"Notepad", src:"images/icons/notepad.png"},
    {name:"Paint", src:"images/icons/paint.png"}
]

let windowDict = {};

let screen = document.querySelector('#screen');
let fragment = document.createDocumentFragment();
let blankWindow = document.querySelector('.draggable-window');
var windows = [];

for(let i = 0; i < iconNames.length; i++){
    //icons
    var iconContainer = document.createElement("div");
    var iconImage = document.createElement("img");
    var iconSpan = document.createElement("span");

    iconImage.src = iconNames[i].src;
    iconSpan.textContent = iconNames[i].name;
    
    iconSpan.classList.add('icon-name');
    iconSpan.classList.add('ellpises-overflow');
    iconContainer.classList.add('icon');

    iconContainer.appendChild(iconImage);
    iconContainer.appendChild(iconSpan);

    iconContainer.style.top = (45 + (100 * i)) + 'px';

    //window
    var newWindow = blankWindow.cloneNode(true);
    var windowBarIconImage = newWindow.querySelector('.window-bar-icon');
    var windowBarIconSpan = newWindow.querySelector('.window-bar-span');
    var windowStyle = window.getComputedStyle(newWindow);

    newWindow.id = 'window-' + i;
    newWindow.classList.remove('invisible');
    windows.push(newWindow);

    windowBarIconSpan.textContent = iconNames[i].name;
    windowBarIconImage.src = iconNames[i].src;

    windowDict[newWindow.id] = {
        top: windowStyle.top,
        left: windowStyle.left,
        minHeight: windowStyle.minHeight,
        minWidth: windowStyle.minWidth,
        width: windowStyle.width,
        height: windowStyle.height
    };
    //appending to dom fragment
    fragment.appendChild(iconContainer);
    fragment.appendChild(newWindow);
}
screen.appendChild(fragment);
//add footers. I should also add double click and close
