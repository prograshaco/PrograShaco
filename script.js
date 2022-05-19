var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu")
var logo = document.getElementById("logo")

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
        
    }
        

    else{
        navbar.classList.remove("sticky")
        
      
    }
}


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-JRP1CB8CK0');










