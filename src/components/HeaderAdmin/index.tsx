import { Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { LoggedUser } from "../LoggedUser";

export function HeaderAdmin() {
  return(
    <header>
      <div className="airline-header">
        <div className="airline-header-admin">
            <p>ADMIN</p>
        </div>
        <div className="airline-header-logo">
          <Plane />
          <Link to="/">
            <h2>AIRLINE</h2>
          </Link>
        </div>
        <div className="airline-header-login">
          <div className="airline-header-login-organization">
            <Link to="/admin">
              <p>Início</p>
            </Link>
            <Link to="/admin/flights">
              <p>Voos</p>
            </Link>
            <Link to="/admin/planes">
              <p>Aviões</p>
            </Link>
            <LoggedUser />
          </div>
        </div>
      </div>
    </header>
  )
}