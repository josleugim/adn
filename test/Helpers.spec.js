'use strict';
const assert = require('assert');
const Helpers = require('../server/utilities/Helpers');

describe('Validates the helper functions', () => {
    let noMutation, mutation;
    before(() => {
        noMutation = ["A T G C G A", "C A G T G C", "T T A T T T", "A G A C G G", "G C G T C A", "T C A C T G"];
        mutation = ['A T G C G A', 'C A G T G C', 'T T A T G T', 'A G A A G G', 'C C C C T A', 'T C A C T G'];
    });
    it('Should return false, because the adn has sequence not a mutation', () => {
        Helpers.hasMutation(noMutation)
            .then(result => {
                assert(result === false);
            });
    });

    it('Should return true, when a mutation si found in the sequence', () => {
        Helpers.hasMutation(mutation)
            .then(result => {
                assert(result === true);
            })
    })
});