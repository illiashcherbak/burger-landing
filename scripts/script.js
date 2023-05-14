document.getElementById('main-action-btn').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

let links = document.querySelectorAll('.menu-item > a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    }
}

let buttons = document.getElementsByClassName('products-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});
    }
}

let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
document.getElementById('order-action').onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
       if (!item.value) {
           item.parentElement.style.background = 'red';
           hasError = true;
       } else {
           item.parentElement.style.background = '';
       }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
    }
}

let prices = document.getElementsByClassName('products-item-price');

document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;
    let newCurrency = '$';
    let coefficient = 1;

    switch (currentCurrency) {
        case '$':
            newCurrency = '₴';
            coefficient = 36.96;
            break;

        case '₴':
            newCurrency = '€';
            coefficient = 0.91;
            break;

        case '€':
            newCurrency = '£';
            coefficient = 0.8;
            break;

        case '£':
            newCurrency = '¥';
            coefficient = 6.96;
            break;

        default:
            break;
    }

    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') *  coefficient).toFixed(1) + ' ' + newCurrency;
    }
}