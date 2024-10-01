import { Link } from "react-router-dom"
import * as authService from "../../services/auth-service"
import { useContext } from "react";
import { ContextToken } from "../../utils/contex-token";

export function LoggedUser() {

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }

    return (
        contextTokenPayload && authService.isAuthenticated()
        ? (
            <div className="airline-header-name">
              <div>
                <Link to="/client-area">
                  <p>{contextTokenPayload.username}</p>
                </Link>
              </div>
              <div>
              <Link to="/login">
                <p onClick={handleLogoutClick}>Sair</p>
              </Link>
              </div>
            </div>
        )
        : (
            <Link to="/login">
              <p>Login</p>
            </Link>
        )
    )
}