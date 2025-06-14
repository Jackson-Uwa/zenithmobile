import zenith_logo from "../../assets/zenith.jpg";
import { useLocation } from "react-router-dom";

import styles from "../../styles/pages/header.module.css"

const Header = (props) => {

    const location = useLocation()

    let heading;

    switch (location.pathname) {
        case "/transfers":
            heading = "Transfers"
            break;
        case "/airtime":
            heading = "Airtime Recharge"
            break;
        case "/bills":
            heading = "Bill Payment"
            break;
        case "/":
            heading = "Overview"
        default:
            heading = "Overview";
    }

    return (
        <header className={styles.header}>
            <div>  <span onClick={props.clicked} class={props.toggle ? "fa fa-times" : "fa fa-bars"}></span></div>
            <div className={styles.heading}><p>{heading}</p></div>
            <div>
                <img src={zenith_logo} alt="Zenith_Bank_Logo" />
            </div>
        </header>
    )
}

export default Header