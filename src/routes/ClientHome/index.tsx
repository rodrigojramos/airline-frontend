import { Outlet } from "react-router-dom";
import { HeaderClient } from "../../components/HeaderClient";

export function ClientHome() {
    return(
        <>
            <HeaderClient />
            <Outlet />
        </>
    )
}