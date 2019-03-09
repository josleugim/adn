'use strict';

const Helpers = require('../utilities/Helpers');

exports.post = (req, res) => {
    if(req.body.dna) {
        Helpers.sanitize(req.body.dna)
            .then(Helpers.hasMutation)
            .then(res => {
                if(!res) {
                    return Helpers.sanitize(req.body.dna)
                        .then(Helpers.verticalToHorizontal)
                        .then(Helpers.hasMutation)
                        .catch(err => console.error(err));
                } else {
                    return res;
                }
            })
            .then(res => {
                if(!res) {
                    return Helpers.sanitize(req.body.dna)
                        .then(Helpers.diagonalToHorizontal)
                        .then(Helpers.hasMutation)
                        .catch(err => console.error(err));
                } else {
                    return res;
                }
            })
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
                res.status(403).json(resData);
            }
        } else {
            res.status(403).json({success: false});
        }
    }
};