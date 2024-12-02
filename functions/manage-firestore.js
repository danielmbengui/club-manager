import { firestore } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";


export async function getFirestoreRef(uid, collectionName) {
    const ref = doc(firestore, collectionName, uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
        return ref;
    }
    return null;
}

export async function getFirestoreData(uid, collectionName) {
    const ref = doc(firestore, collectionName, uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
        return snap.data();
    }
    return null;
}
export async function getFirestoreSubRef(parentUid, parentCollectionName, uid, collectionName) {
    const parentRef = doc(firestore, parentCollectionName, parentUid);
    //const snap = await getDoc(ref);
    const ref = doc((collection(parentRef, collectionName)), uid);
    const snap = await getDoc(ref);
    //const isPending = bookingSnap.exists();
    if (snap.exists()) {
        return ref;
    }
    return null;
}
export async function getFirestoreSubData(parentUid, parentCollectionName, uid, collectionName) {
    const parentRef = doc(firestore, parentCollectionName, parentUid);
    //const snap = await getDoc(ref);
    const ref = doc((collection(parentRef, collectionName)), uid);
    const snap = await getDoc(ref);
    //const isPending = bookingSnap.exists();
    if (snap.exists()) {
        return snap.data();
    }
    return null;
}

export function createArrayBookingType() {
    const tab = [
        {value:"Training", name:"Entrainement"},
        {value:"Tournament", name:"Tournoi"},
        {value:"Lesson", name:"Cours"},
    ];
    return tab.sort((a,b)=>a.name.localeCompare(b.name));
}