
function displayContent(contentId){
    var contenu = document.getElementsByClassName('education-content')
    for (let i = 0; i < contenu.length; i++){
        contenu[i].style.display = 'none';
    }
    var contentElement = document.getElementById(contentId + '-content');
    if (contentElement){
        contentElement.style.display = 'flex';
    }

    var educationId = document.getElementById('education')
    var buttonList = educationId.querySelectorAll('button')
    for (let j = 0; j < buttonList.length; j++){
        console.log(buttonList[j]);
        buttonList[j].classList.remove('selected');
    }

    var buttonElement = document.getElementById(contentId + '-button');
    console.log(buttonElement);
    if (buttonElement){
        buttonElement.classList.add('selected');
    }
}