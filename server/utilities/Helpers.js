exports.hasMutation = data => {
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

        countOccurrences(data)
            .then(result => resolve(result))
            .catch(err => console.error(err));
    })
};