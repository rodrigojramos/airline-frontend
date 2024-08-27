export function Login() {
    return (
        <main className="airline-login-main">
            <section className="airline-login-section">
                <div className="airline-login-card">
                    <h3>LOGIN</h3>
                    <div className="airline-login-username">
                        <input 
                            type="text" 
                            value="Email" 
                        />
                    </div>
                    <div className="airline-login-password">
                        <input 
                            type="text" 
                            value="Senha" 
                        />
                    </div>
                    <div className="airline-login-button-enter">
                        Entrar
                    </div>
                    <div className="airline-login-forget-password">
                        <p>Esqueceu a senha?</p>
                    </div>
                    <div className="airline-login-create-account">
                        Criar nova conta
                    </div>
                </div>
            </section>
        </main>
    )
}