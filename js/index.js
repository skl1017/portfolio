
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




window.onload = (event) =>{
    const menu = document.querySelector('body .header-container .nav-mobile');
    const header = document.querySelector('.logo-container');
    const button = document.querySelector('.header-container button');
    
    button.addEventListener('click', (event) =>{
        menu.classList.toggle('show');
    })



    window.onscroll = (event) =>{
        var y = window.scrollY;
        if (y > 68){
            header.classList.add('header-hidden');
            if (menu.classList.contains('show')){
                menu.classList.remove('show');
            }

        }
        else{
            header.classList.remove('header-hidden');
        }
        if (header.classList.contains('header-hidden')){
            menu.style.display = 'none';
        }
        else{
            menu.style.display = 'flex';
        }
    }

    
    
}

