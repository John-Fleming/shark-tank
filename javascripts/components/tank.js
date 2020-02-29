import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

const tankBuilder = () => {
    const allAlivePeople = personData.getAlivePeople();
    let domString = '';
    domString += '<div class="card">';
    domString +=   '<div class="card-header">Shark Tank</div>';
    domString +=   '<ul class="list-group list-group-flush">';

    allAlivePeople.forEach((person) => {
        domString +=     `<li class="list-group-item">${person.name}</li>`;
    });

    domString +=   '</ul>';
    domString += '</div>';
    utils.printToDom('tank', domString);
};

export default { tankBuilder };
