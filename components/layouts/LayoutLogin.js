import React, { useEffect, useState } from 'react';
import * as _Builtin from "@/devlink/_Builtin";
//import * as _utils from "@/devlink//utils";
//import _styles from "@/devlink/LoginPage.module.css";
import { useAuth } from '@/providers/AuthProvider';
import LayoutLoading from './LayoutLoading';
import { DashboardPage, LoginPage } from '@/devlink';
import { PLAYPAD_CREATION_YEAR } from '@/constants';


export default function LayoutLogin({ as: _Component = _Builtin.Block, title, component }) {
    const { login, user, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [ok, setOk] = useState(true);
    const [globalUser, setGlobalUser] = useState(user);
    const year = new Date().getFullYear();
    useEffect(() => {
        //console.log("user change", user)
        setGlobalUser(user);
        setIsError(user.is_error);
    }, [user])
    const handleLogin = async (event) => {
        try {
            await login(event, email, password);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    const handleChangeEmail = (event) => {
        console.log('email changed !', event.target.value);
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        console.log('password changed !', event.target.value);
        setPassword(event.target.value);
    };
    const handleClick = async (event) => {
        console.log('Bouton cliqué !');
        async function launch() {
            await handleLogin(event);
            //console.log("user result", user);
            //setIsError(user.is_error ?? false);
        }
        launch();
    };

    const loginPageComponent = <LoginPage
        showError={isError}
        buttonConnectProps={{
            //onClick: handleClick,  // Ajout de la fonction onClick ici
            onClick: (event) => handleClick(event),  // Ajout de la fonction onClick ici
            //className: "btn-primary",  // Ajout d'une classe CSS
            type: "button"
        }}

        inputEmailProps={{
            onChange: (event) => handleChangeEmail(event),  // Ajout de la fonction onClick ici
            className: "btn-primary",  // Ajout d'une classe CSS
        }}
        inputPasswordProps={{
            onChange: (event) => handleChangePassword(event),  // Ajout de la fonction onClick ici
            className: "btn-primary",  // Ajout d'une classe CSS
        }}
        onSubmitForm={{
            onSubmit: (event) => handleClick(event),  // Ajout de la fonction onClick ici
            //className: "btn-primary",  // Ajout d'une classe CSS
        }}
        copyrightPlayPad={`© ${PLAYPAD_CREATION_YEAR}${year > PLAYPAD_CREATION_YEAR ? `-${year}` : ""} PlayPad Sàrl`}
    />;
    if (globalUser && globalUser.is_connecting) {
        return (<LayoutLoading />);
    }

    if (!globalUser || !globalUser.connected) {
        return (loginPageComponent);
    }

    



    /*
        if (user && !user.is_connecting && user.connected && user.is_team_member) {
            return <DashboardPage title={title} component={component} />; // Ou un spinner pour indiquer que l'animation se charge
        }
        */

    return (component);
}
