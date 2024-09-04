import { useContext, useState } from "react";
import { CredentialsDTO } from "../../../models/auth";
import * as authService from "../../../services/auth-service"
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/contex-token";

export function Login() {

    const navigate = useNavigate();

    const { setContextTokenPayload } = useContext(ContextToken);

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(formData)
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/");
            })
            .catch(error => {
                console.log("Erro no login", error)
            })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value});
    }

    return (
        <main className="airline-login-main">
            <section className="airline-login-section">
                <form onSubmit={handleSubmit}>
                    <div className="airline-login-card">
                        <h3>LOGIN</h3>
                        <div className="airline-login-username">
                            <input 
                                name="username"
                                value={formData.username}
                                type="text" 
                                placeholder="Email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="airline-login-password">
                            <input 
                                name="password"
                                value={formData.password}
                                type="password" 
                                placeholder="Senha"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <button className="airline-login-button-enter" type="submit">Entrar</button>
                        </div>
                        <div className="airline-login-forget-password">
                            <p>Esqueceu a senha?</p>
                        </div>
                        <div className="airline-login-create-account">
                            Criar nova conta
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}