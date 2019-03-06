module.exports = {
    adnSequence,
    hasHorizontalMutation
};

function adnSequence() {
    const sequence = ['A T G C G A', 'C A G T G C', 'T T A T T T', 'A G A C G G', 'G C G T C A', 'T C A C T G'];
    const mutation = ['A T G C G A', 'C A G T G C', 'T T A T G T', 'A G A A G G', 'C C C C T A', 'T C A C T G'];
    return mutation.map(adn => {
        console.log('ADN', adn);
        console.log(hasHorizontalMutation(adn));
        return adn;
    });
}

function hasHorizontalMutation(adn) {
    const adn1 = 'CCCCTA';
    const adn2 = 'ATGCGA';
    const adn3 = 'ACCCCG';
    const adn4 = 'TTATGT';
    const adn5 = 'AGAAGG';
    let counter = 0;
    let occurrenceIndex;
    return adn5.replace(/ /g,'').split('').reduce((acc, character, index, array) => {
        console.log('----', index);
        if(array[index] === array[index + 1] || array[index] === array[occurrenceIndex]) {
            console.log('array[index]', array[index]);
            console.log('array[index + 1]', array[index + 1]);
            console.log('array[occurrenceIndex]', array[occurrenceIndex]);
            counter++;
            occurrenceIndex = index;
        } else {
            occurrenceIndex = 'undefined';
        }

        console.log('counter', counter);
        if(index === array.length - 1) {
            return counter;
        }
    }, 0)
}

console.log(hasHorizontalMutation());