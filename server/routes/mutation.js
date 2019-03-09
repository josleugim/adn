'use strict';
const MutationCtrl = require('../controllers/MutationCtrl');

module.exports = (app) => {
    app.post('/mutation', MutationCtrl.post);
};