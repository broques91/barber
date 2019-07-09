let nav = document.getElementById('navigation');
let links = document.getElementsByClassName('navLink');
let icon = document.getElementById('icon');

window.onresize = colorHeader;
window.onload = colorHeader;

/* Nav */

function colorHeader() {

    let myWidth = window.innerWidth;

    window.onscroll = () => {
    
        if (myWidth > 768) {

            if (document.documentElement.scrollTop > 980) {

                nav.style.background = '#373737';
                links[0].style.color = 'white';
                links[1].style.color = 'white';
                links[2].style.color = 'white';
                links[3].style.color = 'white';

            } else {

                nav.style.background = '#F0EAD6';
                links[0].style.color = '#373737';
                links[1].style.color = '#373737';
                links[2].style.color = '#373737';
                links[3].style.color = '#373737';
            }

        } else {

            nav.style.background = '#F0EAD6';
            links[0].style.color = '#373737';
            links[1].style.color = '#373737';
            links[2].style.color = '#373737';
            links[3].style.color = '#373737';
        } 
    }

};

/* Nav Responsive */

function toggleNav() {
    nav.classList.toggle('responsive');
}

$('html').click(function () {
    if (nav.classList += 'responsive') {
        nav.classList.remove('responsive');
    }
});
$('#icon').click(function (event) {
    event.stopPropagation(); // stop la propagation, donc l'animation audessus
});

/* Scroll */

$('#arrow').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top -50
    },'slow')
})

$('.navLink:nth-child(1)').click(function() {
    $('html, body').animate({
        scrollTop: $('#welcome').offset().top +50
    },'slow')
})

$('.navLink:nth-child(2)').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top -50
    },'slow')
})

$('.navLink:nth-child(3)').click(function() {
    $('html, body').animate({
        scrollTop: $('#prices').offset().top -50
    },'slow')
})

$('.navLink:nth-child(4)').click(function() {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top +50
    },'slow')
})

/* GreenSock */

TweenMax.to('#arrow', 2, {
    delay: 2.7,
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('#welcome h1', 2, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('#welcome h2', 3, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('#navigation', 1, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation', 1.5, {
    delay: 0.2,
    y: -40,
    ease: Expo.easeIn
})

/* Nav Links Animations */

TweenMax.from('#navigation a:nth-child(1) ', 2.5, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(2) ', 3, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(3) ', 3.5, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(4) ', 4, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})


