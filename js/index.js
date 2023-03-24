
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

    //add show-loader then after 1s remove it with hide-loader
    const loader = document.querySelector('.loader');
    loader.classList.add('show-loader');
    setTimeout(() => {
        loader.classList.remove('show-loader');
        loader.classList.add('hide-loader');
    }, 1000);
    //after 1 second, put it in display none
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000);
    

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

    const observer = new IntersectionObserver(callback); // création d'un observer avec l'API Intersection Observer qui va appeler la fonction callback 
                                                      //à chaque changement de visibilité d'un élément

function callback(entries){ // va pour chaque entrée, si isIntersecting est true (qu'il apparait à l'écran), rajouter la classe show, et donc 
                            //lancer l'animation (qu'on peut trouver dans le css)
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          console.log(entry)
          entry.target.classList.add('article-show');
        }
      })
}

const elements = document.querySelectorAll('article'); //selectionne ce que l'on veut animer 

elements.forEach((element) => element.classList.add('article-hidden')); // cache les éléments en ajoutant la classe hidden, afin de pouvoir 
                                                                //apres les afficher avec une animation

elements.forEach((element) => {console.log(element);
  observer.observe(element);
   // va observer chaque élément et va appeler 'observer' à chaque fois 
});
    
    
    
}



