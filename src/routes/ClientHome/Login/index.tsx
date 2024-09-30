import { useContext, useState } from "react";
import * as authService from "../../../services/auth-service";
import * as forms from "../../../utils/forms";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/contex-token";
import { FormInput } from "../../../components/FormInput";

export function Login() {

    const navigate = useNavigate();

    const { setContextTokenPayload } = useContext(ContextToken);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [formData, setFormData] = useState<any>({
        username: {
          value: "",
          id: "username",
          name: "username",
          type: "text",
          placeholder: "Email",
          validation: function (value: string) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              value.toLowerCase()
            );
          },
          message: "Favor informar um email válido",
        },
        password: {
          value: "",
          id: "password",
          name: "password",
          type: "password",
          placeholder: "Senha",
        },
      })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(forms.toValues(formData))
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
        setFormData(forms.update(formData, event.target.name, event.target.value));
    }

    return (
        <main className="airline-login-main">
            <section className="airline-login-section">
                <form onSubmit={handleSubmit}>
                    <div className="airline-login-card">
                        <h3>LOGIN</h3>
                        <div className="airline-login-username">
                            <FormInput
                                { ...formData.username } 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="airline-login-password">
                            <FormInput 
                                { ...formData.password }
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