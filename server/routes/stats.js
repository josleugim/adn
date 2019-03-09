'use strict';

const StatsCtrl = require('../controllers/StatsCtrl');

module.exports = (app) => {
    app.get('/stats', StatsCtrl.get);
};