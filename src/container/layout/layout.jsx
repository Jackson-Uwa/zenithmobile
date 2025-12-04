import { Fragment, useState } from "react";
import styles from "../../styles/pages/layout.module.css";
import { AuthProvider } from "../context/auth";

import Header from "./header";
import Footer from "./footer";

import SideBar from "../../component/sidebar/sidebar";

const Layout = (props) => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    let sidebar;

    if (toggle)
        sidebar = <AuthProvider>
            <SideBar clicked={handleToggle} />
        </AuthProvider>

    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <Header toggle={toggle} clicked={handleToggle} />
                {sidebar}
                <main onClick={() => setToggle(false)}>
                    {props.children}
                </main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout