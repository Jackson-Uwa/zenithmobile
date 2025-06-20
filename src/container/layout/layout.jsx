import { Fragment, useState } from "react";
import styles from "../../styles/pages/layout.module.css";

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
        sidebar = <SideBar clicked={handleToggle} />

    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <Header toggle={toggle} clicked={handleToggle} />
                {sidebar}
                <main onClick={() => setToggle(false)}>
                    {props.children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout