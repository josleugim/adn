'use strict';
const admin = require('firebase-admin');
const serviceAccount = require("../../adn-test-6b3a7-firebase-adminsdk-ire2k-dd1e4362a7.json");

admin.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "adn-test-6b3a7.firebaseapp.com",
    databaseURL: "https://adn-test-6b3a7.firebaseio.com",
    projectId: "adn-test-6b3a7",
    storageBucket: "adn-test-6b3a7.appspot.com",
    credential: admin.credential.cert(serviceAccount)
});

exports.save = async stat => {
    stat.timestampAt = +new Date();
    await admin.firestore().collection('stats').add(stat);
};

exports.read = async () => {
    const snapshot = await admin.firestore().collection('stats').get();
    return snapshot.docs.map(doc => doc.data());
};