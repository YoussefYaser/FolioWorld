// start nav

let humburgerBar = document.getElementById('humburger-bar');
let humburgerToggler = document.getElementById('humburger-toggler')
let nav = document.getElementsByTagName('nav');


humburgerToggler.onclick = function(){
    this.classList.toggle('collapsed');
    if(! this.classList.contains('collapsed')){
        humburgerBar.children[0].style.setProperty('animation-name', 'bar-top-forward');
        humburgerBar.children[2].style.setProperty('animation-name','bar-bottom-forward');
        nav[0].style.setProperty('background-color', 'white');
        nav[0].children[0].children[0].style.setProperty('color', 'white');
        document.body.style.setProperty('overflow', 'hidden');
    }
    else{
        humburgerBar.children[0].style.setProperty('animation-name', 'bar-top-backward');
        humburgerBar.children[2].style.setProperty('animation-name','bar-bottom-backward');
        nav[0].style.removeProperty('background-color');
        nav[0].children[0].children[0].style.setProperty('color', 'var(--main-color)');
        document.body.style.setProperty('overflow', 'auto');

    }
}

window.onresize = function(){
    if(window.innerWidth >= 992){
        if(!humburgerToggler.classList.contains('collapsed'))
            humburgerToggler.onclick();
    }
}

// end nav

// start testimonials

let star = document.getElementById('rating-stars').children;


for(let i=0; i<star.length; i++){
    star[i].onclick = function(event){
        for(let j=0; j<star.length; j++){
            star[j].children[0].removeAttribute('style');
            star[j].children[1].removeAttribute('style');
        }
        for(let k=i+1; k< star.length; k++){
            star[k].children[0].style.color = 'gold';
            star[k].children[1].style.color = 'gold';
        }
        
        if(this.children[0] === event.target){
            this.children[0].style.color = 'gold';
            this.children[1].style.color = 'gold';
        }
        else{
            this.children[1].style.color = 'gold';
        }
    }
}

// end testmonials

// start services

let spanCount = document.querySelectorAll('.page .services .carousel-item > div div span');

for(let i=0; i<spanCount.length; i++)
    spanCount[i].innerHTML = '0'+(i+1);

// end services

// start skills

var skillProgress = document.querySelectorAll('.page .skills  .progress');

for(var i=0; i<skillProgress.length; i++){
    skillProgress[i].setAttribute('data-progress', skillProgress[i].children[0].style.width);
}

// end skills

// start events

var emailInput = document.getElementById('email');
var emailInputLabel = document.querySelector("[for='email']");

emailInput.onfocus = function(){
    emailInputLabel.classList.replace('opacity-100', 'opacity-0');
}

emailInput.onblur = function(){
    emailInputLabel.classList.replace('opacity-0', 'opacity-100');
}


// end events