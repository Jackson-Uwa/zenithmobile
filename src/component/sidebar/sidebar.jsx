import styles from "../../styles/comps/sidebar.module.css";
// import { Fragment } from "react";

const SideBar = (props) => {

    const signOut = () => {
        return window.confirm("Are you sure")
    }

    return (
        <div className={styles.sidebar}>
            <header>
                <p className={styles.username}>JACKSON, UWA IYAMU</p>
                <p><span class="fa fa-times" onClick={props.clicked}></span></p>
            </header>
            <main>
                <ul>
                    <li id={styles.overview}><i class="fa fa-lock"></i>Overview</li>
                    <li><i class="fa fa-lock"></i>Transfer</li>
                    <li><i class="fa fa-lock"></i>Airtime Recharge</li>
                    <li><i class="fa fa-lock"></i>Data Bundles</li>
                    <li><i class="fa fa-lock"></i>Bills Payment</li>
                    <li><i class="fa fa-lock"></i>QR payments</li>
                    <li><i class="fa fa-lock"></i>Connect to eNaira Wallet</li>
                    <li><i class="fa fa-lock"></i>Scheduled Payments</li>
                    <li><i class="fa fa-lock"></i>Cards</li>
                    <li><i class="fa fa-lock"></i>Cheques</li>
                    <li><i class="fa fa-lock"></i>Travel and Leisure</li>
                    <li><i class="fa fa-lock"></i>Bank Services</li>
                    <li><i class="fa fa-lock"></i>Messages</li>
                    <li><i class="fa fa-lock"></i>Settings</li>
                    <li><i class="fa fa-lock"></i>Zenith Near Me</li>
                </ul>
            </main>
            <footer>
                <p onClick={signOut}><span class="fa fa-power-off"></span>Sign Out</p>
            </footer>
        </div>
    )
}

export default SideBar;