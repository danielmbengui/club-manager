import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, firestore } from '@/firebase'; // Ajustez le chemin si nécessaire
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth, updateProfile, } from 'firebase/auth';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { COLLECTION_TEAM_MEMBERS } from '@/constants';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        // Check if the user is stored in localStorage
        //localStorage.removeItem('user');
        const storedUser = localStorage.getItem('user');
        /*
        if (storedUser) {
            console.log("stored user", storedUser);
            setUser(JSON.parse(storedUser));
        } else {
            // If no user is found in localStorage, check with Firebase
            const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
                if (firebaseUser) {
                    console.log("email", firebaseUser.email);
                    const q1 = query(collection(firestore, COLLECTION_TEAM_MEMBERS), where("email", "==", firebaseUser.email));
                    onSnapshot(q1, (querySnapshot) => {

                        //console.log("Current cities in CA: ", cities.join(", "));
                        if (querySnapshot.size > 0) {
                            const user = querySnapshot.docs[0].data();
                            if (user.is_team_member) {
                                console.log("permited", user.is_team_member)
                                console.log("user firestore", user)
                            } else {
                                console.log("permited", user.is_team_member)
                            }

                            querySnapshot.docChanges().forEach((change) => {
                                if (change.type === "added") {
                                    console.log("New city: ", change.doc.data());
                                }
                                if (change.type === "modified") {
                                    console.log("Modified city: ", change.doc.data());
                                }
                                if (change.type === "removed") {
                                    console.log("Removed city: ", change.doc.data());
                                }
                            });
                            user.connected = true;
                            setUser(user);
                            localStorage.setItem('user', JSON.stringify(user));
                        }
                    });
                } else {
                    setUser({connected: false});
                    localStorage.removeItem('user');
                }
            });

            return () => unsubscribe();
        }
        */
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                console.log("email", firebaseUser.email);
                const q1 = query(collection(firestore, COLLECTION_TEAM_MEMBERS), where("email", "==", firebaseUser.email));
                onSnapshot(q1, (querySnapshot) => {

                    //console.log("Current cities in CA: ", cities.join(", "));
                    if (querySnapshot.size > 0) {
                        const user = querySnapshot.docs[0].data();
                        if (user.is_team_member) {
                            console.log("permited", user.is_team_member)
                            console.log("user firestore", user)
                        } else {
                            console.log("permited", user.is_team_member)
                        }

                        querySnapshot.docChanges().forEach((change) => {
                            if (change.type === "added") {
                                console.log("New city: ", change.doc.data());
                            }
                            if (change.type === "modified") {
                                console.log("Modified city: ", change.doc.data());
                            }
                            if (change.type === "removed") {
                                console.log("Removed city: ", change.doc.data());
                            }
                        });
                        user.connected = true;
                        user.is_team_member = true;
                        setUser(user);
                        //localStorage.setItem('user', JSON.stringify(user));
                    } else {
                        setUser({ connected: true, is_team_member: false });
                        //user.connected && !user.is_team_member
                    }
                });
            } else {
                setUser({ connected: false });
                //localStorage.removeItem('user');
            }
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            //userCredential.user.connected = true;
            console.log("user", userCredential.user)
            //setUser(userCredential.user);
            if (userCredential.user) {
                console.log("email", userCredential.user.email);
                const q1 = query(collection(firestore, COLLECTION_TEAM_MEMBERS), where("email", "==", userCredential.user.email));
                onSnapshot(q1, (querySnapshot) => {
                    //console.log("Current cities in CA: ", cities.join(", "));
                    if (querySnapshot.size > 0) {
                        const user = querySnapshot.docs[0].data();
                        querySnapshot.docChanges().forEach((change) => {
                            if (change.type === "added" || change.type === "modified") {
                                console.log("New city: ", change.doc.data());
                                user.connected = true;
                                user.is_team_member = true;
                                setUser(user);
                                localStorage.setItem('user', JSON.stringify(user));
                            }
                            if (change.type === "removed") {
                                console.log("Removed city: ", change.doc.data());
                                setUser({ connected: false });
                                localStorage.removeItem('user');
                            }
                        });

                    }
                });
            } else {
                setUser({ connected: false });
                localStorage.removeItem('user');
            }
        } catch (error) {
            console.error("Failed to login:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            const userData = { ...user };
            userData.connected = false;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            //localStorage.removeItem('user');
        } catch (error) {
            console.error("Failed to logout:", error);
            throw error;
        }
    };

    const deleteUserAccount = async () => {
        if (user) {
            try {
                await user.delete();
                setUser(null);
                localStorage.removeItem('user');
            } catch (error) {
                console.error("Failed to delete user:", error);
                throw error;
            }
        }
    };

    const updateUserProfile = async (newProfile) => {
        if (user) {
            try {
                //await user.updateProfile(newProfile);
                updateProfile(auth.currentUser, {
                    displayName: newProfile.display_name,
                    photoURL: newProfile.photo_url
                }).then(() => {
                    // Profile updated!
                    // ...
                    setUser({ ...user, ...newProfile });
                    localStorage.setItem('user', JSON.stringify({ ...user, ...newProfile }));
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            } catch (error) {
                console.error("Failed to update user:", error);
                throw error;
            }
        }
    };

    const value = {
        user,
        login,
        logout,
        deleteUserAccount,
        updateUserProfile,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
