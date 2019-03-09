'use strict';
const FirestoreService = require('../utilities/Firestore.service');

exports.get = (req, res) => {
    FirestoreService.read()
        .then(data => {
            res.status(200).json(data);
        })
};