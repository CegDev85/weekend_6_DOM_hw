document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    const outfitSeletion = document.querySelector('#outfit-choice');
    outfitSeletion.addEventListener('submit', handleOutfitChoice);

    const deleteOutfit = document.querySelector('#delete-outfit');
    deleteOutfit.addEventListener('click', handleDeleteOutfitClick)
})

const handleDeleteAllClick = function (event) {
    const assembleYourTeam = document.querySelector('#assemble-your-team');
    assembleYourTeam.innerHTML = '';
    
}

const handleDeleteOutfitClick = function (event) {
    const fighterOutfit = document.querySelector('#fighter-outfit');
    fighterOutfit.innerHTML = '';
}

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const assembleYourteamItem = createAssembleYourTeamItem(event.target);
    const assembleYourTeam = document.querySelector('#assemble-your-team');
    assembleYourTeam.appendChild(assembleYourteamItem);


    event.target.reset();
}

const handleOutfitChoice = function (event) {
    event.preventDefault();

    const fighterOutfitItem = createFighterOutfitChoiceItem(event.target);
    const fighterOutfitChoice = document.querySelector('#fighter-outfit');
    fighterOutfitChoice.appendChild(fighterOutfitItem)

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

const createFighterOutfitChoiceItem = function (form) {
    const fighterOutfitItem = document.createElement('li');
    fighterOutfitItem.classList.add('fighter-outfit')

    const choice = document.createElement('p');
    choice.textContent = form.outfit.value;
    fighterOutfitItem.appendChild(choice)

    return fighterOutfitItem;
}


