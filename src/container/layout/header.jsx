import zenith_logo from "../../assets/zenith.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router";

import styles from "../../styles/pages/header.module.css"

const Header = (props) => {

    // let location = useLocation()

    useEffect(() => {
        console.log(props)
    }, [location]);

    let heading;

    switch (location) {
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
            heading = "Bill Payment";
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