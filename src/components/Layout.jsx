import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";





export function Layout() {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet />
            </main>          
            <Footer></Footer>
        </>
    );
}