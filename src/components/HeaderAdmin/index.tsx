import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

export function HeaderAdmin() {
  return(
    <header>
      <div className="airline-header">
        <div className="airline-header-admin">
            <p>ADMIN</p>
        </div>
        <div className="airline-header-logo">
          <Plane />
          <Link to="/admin">
            <h2>AIRLINE</h2>
          </Link>
        </div>
        <div className="airline-header-login">
          <Link to="/admin">
            <p>Início</p>
          </Link>
          <Link to="/admin/flights">
            <p>Voos</p>
          </Link>
          <Link to="/admin/planes">
          <p>Aviões</p>
          </Link>
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  )
}