/**
 * Evaluates if the sequences han a mutation
 * @param matrix
 * @returns {Promise<any>}
 */
exports.hasMutation = matrix => {
    return new Promise(resolve => {
        let countOccurrences = (sequences) => {
            return new Promise(resolve => {
                let sequencePromises = [];

                sequences.map(sequence => sequencePromises.push(hasMutation(sequence)));

                Promise
                    .all(sequencePromises)
                    .then(results => resolve(results.indexOf(true) > -1));
            })
        };

        function hasMutation(sequence) {
            return new Promise(async resolve => {
                const groupCharacters = sequence.replace(/ /g, '').match(/([a-zA-Z])\1*/g) || [];
                const result = await groupCharacters.map(function (itm) {
                    return [itm.charAt(0), itm.length];
                }).reduce((acc, data) => {
                    return acc.concat(data);
                });

                resolve(result.indexOf(4) > -1);
            })
        }

        countOccurrences(matrix)
            .then(result => resolve(result))
            .catch(err => console.error(err));
    })
};

/**
 * Convert the columns to rows so the hasMutation function can determine if has a mutation
 * @param matrix
 * @returns {Promise<any>}
 */
exports.verticalToHorizontal = (matrix) => {
    return new Promise(async (resolve, reject) => {
        const newArray = [];
        let row1 = '';
        let row2 = '';
        let row3 = '';
        let row4 = '';
        let row5 = '';
        let row6 = '';
        const horizontal = await matrix.map((sequence, index, array) => {
            row1 = row1 + returnChar(sequence, 0);
            row2 = row2 + returnChar(sequence, 1);
            row3 = row3 + returnChar(sequence, 2);
            row4 = row4 + returnChar(sequence, 3);
            row5 = row5 + returnChar(sequence, 4);
            row6 = row6 + returnChar(sequence, 5);

            if (index === array.length - 1) {
                newArray.push(row1);
                newArray.push(row2);
                newArray.push(row3);
                newArray.push(row4);
                newArray.push(row5);
                newArray.push(row6);
                return newArray;
            }
        });
        resolve(horizontal[5]);
    });

    function returnChar(sequence, index) {
        return sequence.split('').filter((char, i) => {
            if(i === index) {
                return char;
            }
        })
    }
};

exports.diagonalToHorizontal = matrix => {

};

/**
 * Cleans the blank spaces
 * @param matrix
 * @returns {Promise<void>}
 */
exports.sanitize = async (matrix) => {
    return await matrix.map(sequence => sequence.replace(/ /g, ''));
};