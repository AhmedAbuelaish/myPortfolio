window.onscroll = function(){scrollFunction()}

var lastScrollTop = window.pageYOffset
var navbarHeight = document.getElementById('navbar').clientHeight

function scrollFunction() {
    console.log(window.pageYOffset, lastScrollTop)
    if (window.pageYOffset > navbarHeight){
        $('#navbar').addClass('navbg-dark')
    } else if (window.pageYOffset < navbarHeight){
        $('#navbar').removeClass('navbg-dark')
    }

    if (window.pageYOffset > lastScrollTop) {
        $('#navbar').addClass('navbar-hide')
    } else if (window.pageYOffset < lastScrollTop) {
        $('#navbar').removeClass('navbar-hide')
    }
    lastScrollTop = window.pageYOffset
}