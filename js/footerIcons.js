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


//PROBLEMS:

// does not go full screen if it was before going minimize :P