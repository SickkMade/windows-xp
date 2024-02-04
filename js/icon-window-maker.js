let iconNames = [
    {name:"Internet Explorer", src:"images/icons/internet-explorer.png"},
    {name:"Minesweeper", src:"images/icons/minesweeper.png"},
    {name:"My Computer", src:"images/icons/mypc.png"},
    {name:"Notepad", src:"images/icons/notepad.png"},
    {name:"Paint", src:"images/icons/paint.png"}
]
let fragment = document.createDocumentFragment();
let blankWindow = document.querySelector('.draggable-window');


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

    newWindow.classList.remove('invisible');

    windowBarIconSpan.textContent = iconNames[i].name;
    windowBarIconImage.src = iconNames[i].src;

    //appending to dom fragment
    fragment.appendChild(iconContainer);
    fragment.appendChild(newWindow);
}
document.body.appendChild(fragment);
//add footers. I should also add double click and close
