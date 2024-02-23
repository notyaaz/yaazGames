import React from "react";
import { auth } from "../../Firebase.js";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    getAdditionalUserInfo,
} from "firebase/auth";
import { addUser } from "./Firestore.js";
import Cookies from "universal-cookie";

const provider = new GoogleAuthProvider();
export const cookies = new Cookies(null, { path: "/" });

export async function signUp(email, password, username) {
    if (!username) {
        return "     please enter a username";
    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addUser(user.uid, username, user.email);
        cookies.set("user-id", user.uid);
        return "";
    } catch (err) {
        console.error(err.code);
        return err.code;
    }
}

export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        cookies.set("user-id", user.uid);
        return "";
    } catch (err) {
        console.error(err.code);
        return err.code;
    }
}

export async function googleSign() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        if (getAdditionalUserInfo(result).isNewUser) {
            await addUser(user.uid, user.displayName, user.email);
            cookies.set("user-id", user.uid);
        } else {
            cookies.set("user-id", user.uid);
        }
    } catch (err) {
        console.error(err);
    }
}
