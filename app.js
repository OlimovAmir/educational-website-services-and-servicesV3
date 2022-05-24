$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });
    
});


// Добавление класса
let popup = document.querySelector('.logo__lenovo2');
let openPopupButton = document.querySelector('.button2');
openPopupButton.addEventListener('click', () => {
    if (!popup.classList.contains('logo_hidden')) {
        popup.classList.add('logo_hidden');
        document.querySelector('.button2').value = 'Показать все';
        document.querySelector('#arrows').style.transform = 'rotate(360deg)';

    } else {
        popup.classList.remove('logo_hidden')
        document.querySelector('.button2').value = 'Скрыть';
        document.querySelector('#arrows').style.transform = 'rotate(180deg)';

    }
});

let popup1 = document.querySelector('.logo__samsung2');
let openPopupButton1 = document.querySelector('.button2');
openPopupButton.addEventListener('click', () => {
    if (!popup1.classList.contains('logo_hidden')) {
        popup1.classList.add('logo_hidden');
    } else {
        popup1.classList.remove('logo_hidden')
    }
});

let popup2 = document.querySelector('.logo__apple2');
let openPopupButton2 = document.querySelector('.button2');
openPopupButton.addEventListener('click', function () {
    if (!popup2.classList.contains('logo_hidden')) {
        popup2.classList.add('logo_hidden');
    } else {
        popup2.classList.remove('logo_hidden')
    }

});

let popup3 = document.querySelector('.logo__apple3');
let openPopupButton3 = document.querySelector('.button2');
openPopupButton.addEventListener('click', function () {
    if (!popup3.classList.contains('logo_hidden')) {
        popup3.classList.add('logo_hidden');
    } else {
        popup3.classList.remove('logo_hidden')
    }

});