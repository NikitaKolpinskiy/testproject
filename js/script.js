var serviceButton = document.querySelector('#service-button');

serviceButton.addEventListener('click', function(e) {
    console.dir(e);
    var button = e.currentTarget;

    button.innerText = 'Заказ совершён';
    button.classList.add('button-disabled');
    button.disabled = true;
});