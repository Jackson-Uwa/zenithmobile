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
                    <li id={styles.overview}><i class="fa fa-bars"></i>Overview</li>
                    <li><i class="fa fa-exchange-alt"></i>Transfer</li>
                    <li><i class="fa fa-phone"></i>Airtime Recharge</li>
                    <li><i class="fa fa-calendar"></i>Data Bundles</li>
                    <li><i class="fa fa-calendar"></i>Bills Payment</li>
                    <li><i class="fa fa-fingerprint"></i>QR payments</li>
                    <li><i class="fa fa-wallet"></i>Connect to eNaira Wallet</li>
                    <li><i class="fa fa-calendar"></i>Scheduled Payments</li>
                    <li><i class="fa fa-money-check"></i>Cards</li>
                    <li><i class="fa fa-money-check"></i>Cheques</li>
                    <li><i class="fa fa-plane-departure"></i>Travel and Leisure</li>
                    <li><i class="fa fa-bank"></i>Bank Services</li>
                    <li><i class="fa fa-message"></i>Messages</li>
                    <li><i class="fa fa-gear"></i>Settings</li>
                    <li><i class="fa fa-location-dot"></i>Zenith Near Me</li>
                </ul>
            </main>
            <footer>
                <p onClick={signOut}><span class="fa fa-power-off"></span>Sign Out</p>
            </footer>
        </div>
    )
}

export default SideBar;