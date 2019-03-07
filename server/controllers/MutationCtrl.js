'use strict';

const Helpers = require('../utilities/Helpers');

exports.post = (req, res) => {
    if(req.body.dna) {
        Helpers.verticalToHorizontal(req.body.dna)
            .then(result => {
                console.log('result', result);
            })
            .catch();
        Helpers.hasMutation(req.body.dna)
            .then(sendResponse)
            .catch(err => console.error(err));
    } else {
        sendResponse();
    }


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
        } else {
            res.status(300).json({success: false});
        }
    }
};