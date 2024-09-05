import { Plane, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/contex-token";
import { LoggedUser } from "../LoggedUser";

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
                  <Settings />
                </Link>
            }
            <LoggedUser />
          </div>
        </div>
      </div>
    </header>
  )
}