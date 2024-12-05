import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, firestore } from '@/firebase'; // Ajustez le chemin si nécessaire
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth, updateProfile, } from 'firebase/auth';
import { Firestore, collection, getDocs, onSnapshot, query, where, doc } from 'firebase/firestore';
import { COLLECTION_CLUBS, COLLECTION_USERS_CLUB } from '@/constants';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState({ connected: false, is_connecting: true, is_team_member: false, is_error: false });
    const [club, setClub] = useState(null);
    const auth = getAuth();
    useEffect(() => {
        // Écouter les changements d'état de l'utilisateur
        const changeLogin = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({ connected: false, is_connecting: true, is_team_member: false, is_error: false });
                const q1 = query(collection(firestore, COLLECTION_USERS_CLUB), where("email", "==", firebaseUser.email));
                const getUser = onSnapshot(q1, (querySnapshot) => {
                    if (querySnapshot.size > 0) {
                        let updatedUser = querySnapshot.docs[0].data();
                        updatedUser = {
                            ...updatedUser,
                            connected: true,
                            is_team_member: true,
                            is_connecting: false,
                            is_error: false
                        };
                        setUser(updatedUser);
                        if (updatedUser && updatedUser.club_ref && updatedUser.club_ref.id) {
                            const getClub = onSnapshot(doc(firestore, COLLECTION_CLUBS, updatedUser.club_ref.id), (doc) => {
                                setClub(doc.data());
                            });
                            return () => getClub();
                        }
                    } else {
                        setUser({ connected: false, is_connecting: false, is_team_member: false, is_error: true });
                        setClub(null);
                    }
                });
                return () => getUser();
            } else {
                //setUser({ connected: false, is_connecting: false, is_team_member: false, is_error: false });
                
                setUser((prevUser) => ({
                    ...prevUser,
                    //connected: false,
                    //is_team_member: false,
                    is_connecting: false,
                    //is_error: false,
                    // autres données
                }));
                setClub(null);
            }
        });

        // Nettoyer l'écouteur lors du démontage du composant
        return () => changeLogin();
    }, [auth]);
    const firebaseUser = auth.currentUser;
    useEffect(() => {
    }, [firebaseUser]);

    const login = async (event, email, password) => {
        var user = { connected: false, is_connecting: true, is_team_member: false, is_error: false };
        //setUser(user);
        setUser((prevUser) => ({
            ...prevUser,
            connected: false,
            is_team_member: false,
            is_connecting: false,
            is_error: false,
            // autres données
        }));
        event.preventDefault();
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            user = userCredential.user;

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const user = {};
            user.connected = false;
            user.is_team_member = false;
            user.is_connecting = false;
            user.is_error = true;
            setUser({ connected: false, is_connecting: false, is_team_member: false, is_error: true });
            setClub(null);
        });
    };

    const logout = async () => {
        var userData = { connected: true, is_connecting: true, is_team_member: true };
        setUser(userData);
        try {

            await signOut(auth);
            userData = { ...user };
            userData.connected = false;
            userData.is_team_member = false;
            userData.is_connecting = false;
            userData.is_error = false;
            setUser(userData);
            setClub(null);
            //localStorage.setItem('user', JSON.stringify(userData));
            window.location.href = "/";
            //localStorage.removeItem('user');
        } catch (error) {
            console.error("Failed to logout:", error);
            userData.connected = true;
            userData.is_team_member = true;
            userData.is_connecting = false;
            userData.is_error = false;
            setUser(userData);
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
        club,
        login,
        logout,
        deleteUserAccount,
        updateUserProfile,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
