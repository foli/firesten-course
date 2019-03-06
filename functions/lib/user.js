"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
exports.createUserAccount = functions
    .region('europe-west1')
    .runWith({ memory: '128MB', timeoutSeconds: 60 })
    .auth.user()
    .onCreate(e => {
    console.log('Event: ', e);
    const user = {
        email: e.email,
        displayName: e.displayName,
        memberSince: e.metadata.creationTime,
        phoneNumber: e.phoneNumber,
        photoURL: e.photoURL,
        uid: e.uid,
        role: ['member']
    };
    const userRef = db.doc(`/users/${e.uid}`);
    return userRef.set(user);
});
exports.deactivateUserAccount = functions
    .region('europe-west1')
    .runWith({ memory: '128MB', timeoutSeconds: 60 })
    .auth.user()
    .onDelete(e => {
    const userRef = db.doc(`users/${e.uid}`);
    return userRef.update({ isInactive: true });
});
//# sourceMappingURL=user.js.map