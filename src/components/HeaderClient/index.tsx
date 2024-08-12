import { Plane } from "lucide-react";

export function HeaderClient() {
  return(
    <header>
      <div className="airline-header">
        <div className="airline-header-logo">
          <Plane />
          <h2>AIRLINE</h2>
        </div>
        <div className="airline-header-login">
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  )
}