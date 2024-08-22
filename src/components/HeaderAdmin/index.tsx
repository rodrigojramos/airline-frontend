import { Plane } from "lucide-react";

export function HeaderAdmin() {
  return(
    <header>
      <div className="airline-header">
        <div className="airline-header-admin">
            <p>ADMIN</p>
        </div>
        <div className="airline-header-logo">
          <Plane />
          <h2>AIRLINE</h2>
        </div>
        <div className="airline-header-login">
          <p>Início</p>
          <p>Voos</p>
          <p>Aviões</p>
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  )
}