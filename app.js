module.exports = {
    adnSequence,
    hasHorizontalMutation
};

function adnSequence() {
    const noMutation = ['A T G C G A', 'C A G T G C', 'T T A T T T', 'A G A C G G', 'G C G T C A', 'T C A C T G'];
    const mutation = ['A T G C G A', 'C A G T G C', 'T T A T G T', 'A G A A G G', 'C C C C T A', 'T C A C T G'];
    const results = noMutation.map(sequence => hasMutation(sequence));
    return results.indexOf(true) > -1;
}

function hasHorizontalMutation(adn) {
    const adn1 = 'CCCCTA';
    const adn2 = 'ATGCGA';
    const adn3 = 'ACCCCG';
    const adn4 = 'TTATGT';
    const adn5 = 'AGAAGG';
    const adn6 = 'TTATTT';
    let counter = 0;
    return adn6.replace(/ /g,'').split('').reduce((acc, character, index, array) => {
        if (array[index] === array[index + 1]) {
            counter++;
        } else {

        }

        if(index === array.length - 1) {
            return counter;
        }
    }, 0)
}

/**
 * Identifies if a sequence has four consecutive characters 'a mutation'
 * @param sequence
 * @returns {any[]}
 */
function hasMutation(sequence) {
    const adn1 = 'CCCCTA';
    const groupCharacters = sequence.replace(/ /g,'').match(/([a-zA-Z])\1*/g)||[];
    const result = groupCharacters.map(function(itm){
        return [itm.charAt(0), itm.length];
    }).reduce((acc, data) => {
        return acc.concat(data);
    });

    return result.indexOf(4) > -1;
}

console.log(adnSequence());