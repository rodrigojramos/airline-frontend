import { Plane, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/contex-token";

export function HeaderClient() {

  const { contextTokenPayload } = useContext(ContextToken);

  return(
    <header>
      <div className="airline-header">
        <div className="airline-header-logo">
          <Plane />
          <Link to="/">
            <h2>AIRLINE</h2>
          </Link>
        </div>
        <div className="airline-header-login">
          <div className="airline-header-login-settings">
            {
              contextTokenPayload &&
              authService.hasAnyRoles(['ROLE_ADMIN']) &&
              <Link to="/admin">
              <div className="airline-header-login-icon">
                <Settings />
              </div>
              </Link>
            }
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}