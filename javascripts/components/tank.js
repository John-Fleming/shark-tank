import utils from '../helpers/utils.js';
import people from '../helpers/data/personData.js';

const tankBuilder = () => {
    let domString = 'help 2.0';
    utils.printToDom('tank', domString);
};

export default { tankBuilder };
