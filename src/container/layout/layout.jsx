import { Fragment, useState } from "react"

import Header from "./header";
import Footer from "./footer";

import SideBar from "../../component/sidebar/sidebar";

const Layout = (props) => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    let sidebar;

    if (toggle) {
        sidebar = <SideBar clicked={handleToggle} />
    }

    return <Fragment>
        <Header toggle={toggle} clicked={handleToggle} />
        {sidebar}
        <main onClick={() => setToggle(false)}>
            {props.children}
        </main>
        <Footer />
    </Fragment>
}

export default Layout