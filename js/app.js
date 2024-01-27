function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let image = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');
    let gameName = game.querySelector('.dashboard__item__name');

    if (button.textContent == 'Rent') {
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Return';
    } else {
        if (confirm(`Are you sure you want to return ${gameName.textContent}?`)) {
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Rent';
            alert('Game Returned');
        }

    }
    let classes = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(classes);
    let count = classes.length;
    console.log(`${count} Rented Games`);
}
