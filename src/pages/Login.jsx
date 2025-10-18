import { useState } from "react"
import Input from "../Components/Input"
import Button from "../Components/Button";


function Login({ pageTitle }) {
    const [email, setEmail] = useState('');
    const [pssword, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    document.querySelector('title').innerHTML = pageTitle
    return (
        <>
            {/*  <div className="login-container">
                <div className="login-item">
                    <div className="login-left">
                        <div className="logo"></div>
                        <div className="login-title">
                            <h1>Connexion Admin</h1>
                            <p>Veuillez saisir vos identifiants pour vous connecter</p>
                        </div>
                        <div className="input-login-container">
                            <Input
                                placeholder={"Email"}
                                value={email}
                                type="email"
                                onChange={handleEmail}
                                className={"input input-login"}
                            />
                            <Input
                                placeholder={"Mot de passe"}
                                value={email} type="password"
                                onChange={handlePassword}
                                className={"input input-login"}
                                id={"user-password"}
                                id_i={"show-password"}
                            />
                            <Button
                                placeholder={"Se Connecter"}
                                type="submit"
                                className={"button button-one login-button"} /
                            >
                        </div>
                        <p className="forgot-password"><a href="/">Mot de passe oublié ?</a></p>
                    </div>

                    <div className="login-right"></div>
                </div>
            </div>
        */}

            <div className="login-container">
                <div className="login-item">
                    <div className="login-left">
                        <div className="login-title">
                            <h1>Connexion Admin</h1>
                            <p>Veuillez saisir vos identifiants</p>
                        </div>

                        <form action="">
                            <Input
                                placeholder={"Email"}
                                value={email}
                                type="email"
                                onChange={handleEmail}
                                className={"input input-login"}
                            />
                            <Input
                                placeholder={"Mot de passe"}
                                value={email} type="password"
                                onChange={handlePassword}
                                className={"input input-login"}
                                id={"user-password"}
                                id_i={"show-password"}
                            />
                            <p className="forgot-password">
                                <a href="#">Mot de passe oublié ?</a>
                            </p><Button
                                placeholder={"Se Connecter"}
                                type="submit"
                                className={"button button-one login-button"} /
                            >
                        </form>
                    </div>

                    <div className="login-right"></div>
                </div>
            </div>
        </>
    )
}

export default Login