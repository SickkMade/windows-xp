let iconNames = [
    {name:"Internet Explorer", src:"images/icons/internet-explorer.png"},
    {name:"Minesweeper", src:"images/icons/minesweeper.png"},
    {name:"My Computer", src:"images/icons/mypc.png"},
    {name:"Notepad", src:"images/icons/notepad.png"},
    {name:"Paint", src:"images/icons/paint.png"}
]

let screen = document.querySelector('#screen');
let fragment = document.createDocumentFragment();
let blankWindow = document.querySelector('.draggable-window');
let blankIconFooter = document.querySelector('.icon-footer');
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

    newWindow.id = 'window-' + i;
    newWindow.classList.remove('invisible');
    windows.push(newWindow);

    windowBarIconSpan.textContent = iconNames[i].name;
    windowBarIconImage.src = iconNames[i].src;

    //footer icons
    var newIconFooter = blankIconFooter.cloneNode(true); //the boolean is for a deep clone
    var iconFooterImage = newIconFooter.querySelector('img');
    var iconFooterSpan = newIconFooter.querySelector('span');

    iconFooterImage.src = iconNames[i].src;
    iconFooterSpan.textContent = iconNames[i].name;
    newIconFooter.id = 'footer-' + i;

    //appending to dom fragment
    fragment.appendChild(iconContainer);
    fragment.appendChild(newWindow);
    document.body.appendChild(newIconFooter);
}
screen.appendChild(fragment);
//add footers. I should also add double click and close
