iconWrapper = document.getElementById('icon-wrapper');
yIconOffsets = [];
xIconOffsets = [];
currentIcon = null;

iconWrapper.addEventListener('mousedown', function(e){
    xIconOffset = [];
    yIconOffset = [];
    currentIcon = e.target.closest('.icon')
    if(currentIcon){
        for(let i = 0; i < selectedIcons.length; i++){
            const iconRect = selectedIcons[i].getBoundingClientRect();
            yIconOffset.push(e.clientY - iconRect.top);
            xIconOffset.push(e.clientX - iconRect.left);
        }
    }
})

document.addEventListener('mouseup', function(){
    currentIcon = null;
})
document.addEventListener('mousemove', function(e){
    if(currentIcon){
        for(let i = 0; i < selectedIcons.length; i++){
            let xMove = e.clientX - xIconOffset[i];
            let yMove = e.clientY - yIconOffset[i];
            selectedIcons[i].style.transform = `translate(${xMove}px, ${yMove}px)`;
        }
    }
})