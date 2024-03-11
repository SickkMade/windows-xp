let iconFooters = document.querySelector('#icon-footers');

function addActiveFooter(newFooter){
    iconFooters.appendChild(newFooter);
    newFooter.classList.remove('invisible');
}

document.querySelector('#icon-footers').addEventListener('mouseup', function(e){
    let target = e.target.closest('.icon-footer');
    if(target){
        let targetWindow = document.querySelector('#window-' + target.id.slice(-1))
        targetWindow.classList.remove('invisible');
        target.classList.add('invisible');
    }
})

//problems:

//footers cant be removed because i don't know the index of any individiual item