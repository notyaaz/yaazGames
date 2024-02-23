import { addDoc, setDoc, doc, getDocs, collection, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase.js";
import { cookies } from "./Auth.js";

export async function addUser(id, username, email, msTime = 0, tzTime = 0) {
    await setDoc(doc(db, "users", id), {
        username: username,
        email: email,
        msTime: msTime,
        tzTime: tzTime,
    });
}

export async function getUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));

        const ar = [];
        querySnapshot.forEach((doc) => {
            ar.push({ uid: doc.id, ...doc.data() });
        });

        return ar;
    } catch (err) {
        console.error(err);
    }
}

export async function updateUser(field, fieldValue) {
    const userId = cookies.get("user-id");

    if (userId) {
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, { [field]: fieldValue });
    }
}
