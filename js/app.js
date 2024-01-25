function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let image = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');
    if (button.textContent == 'Rent') {
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Return';
    } else {
        image.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Rent';
    }
}