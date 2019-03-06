'use strict';

const Helpers = require('../utilities/Helpers');

exports.post = (req, res) => {
    Helpers.hasMutation()
        .then(sendResponse)
        .catch(err => console.error(err));

    function sendResponse(result) {
        if (typeof result !== 'undefined') {
            const resData = {
                success: true,
                data: result
            };

            if(result) {
                res.status(200).json(resData);
            } else {
                resData.success = false;
                res.status(300).json(resData);
            }
        }
    }
    res.status(200);
};