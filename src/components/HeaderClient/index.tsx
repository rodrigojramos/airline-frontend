import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

export function HeaderClient() {
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
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </header>
  )
}