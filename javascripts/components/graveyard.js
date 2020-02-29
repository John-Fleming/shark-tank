import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

const buildGraveyard = () => {
    const allDeadPeople = personData.getDeadPeople();
    let domString = '';
    allDeadPeople.forEach((person) => {
        domString += '<div class="person-card col-4">';
        domString += '<div class="card mt-2">';
        domString +=   '<div class="card-body text-center">';
        domString +=     `<h5 class="card-title">${person.name}</h5>`;
        domString +=     `<a href="#" id="${person.id}" class="btn btn-dark revive-btn">REVIVE</a>`;
        domString +=   '</div>';
        domString += '</div>';
        domString += '</div>';
    })
    utils.printToDom('graveyard', domString);
};

export default { buildGraveyard };