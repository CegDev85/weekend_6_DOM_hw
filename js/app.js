document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleDeleteAllClick = function (event) {
    const assembleYourTeam = document.querySelector('#assemble-your-team');
    assembleYourTeam.innerHTML = '';
}

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const assembleYourteamItem = createAssembleYourTeamItem(event.target);
    const assembleYourTeam = document.querySelector('#assemble-your-team');
    assembleYourTeam.appendChild(assembleYourteamItem);


    event.target.reset();
}

const createAssembleYourTeamItem = function (form) {
    const assembleYourteamItem = document.createElement('li');
    assembleYourteamItem.classList.add('assemble-your-team')

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    assembleYourteamItem.appendChild(name)

    const specialAttack = document.createElement('h3');
    specialAttack.textContent = form.attack.value;
    assembleYourteamItem.appendChild(specialAttack);

    const fightingStyle = document.createElement('p');
    fightingStyle.textContent = form.style.value;
    assembleYourteamItem.appendChild(fightingStyle);

    return assembleYourteamItem;
}
