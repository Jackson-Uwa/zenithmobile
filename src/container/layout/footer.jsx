import styles from "../../styles/pages/footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.overview}>
                <NavLink exact style={{ color: "#000", textDecoration: "none", textAlign: "center" }} activeStyle={{ color: "red" }} to="/">
                    <p className={styles.icon}><span class="fa fa-chart-bar"></span></p>
                    <p className={styles.text}>Overview</p>
                </NavLink>
            </div>
            <div className={styles.airtime}>
                <NavLink style={{ color: "#000", textDecoration: "none", textAlign: "center" }} activeStyle={{ color: "red" }} to="/airtime">
                    <p className={styles.icon}><span class="fa fa-newspaper"></span></p>
                    <p className={styles.text}>Airtime</p>
                </NavLink>
            </div>
            <div className={styles.transfer}>
                <NavLink style={{ color: "#000", textDecoration: "none", textAlign: "center" }} activeStyle={{ color: "red" }} to="/transfers">
                    <p className={styles.icon}><span class="fa fa-exchange-alt"></span></p>
                    <p className={styles.text}>Transfer</p>
                </NavLink>
            </div>
            <div className={styles.bills}>
                <NavLink style={{ color: "#000", textDecoration: "none", textAlign: "center" }} activeStyle={{ color: "red" }} to="/bills">
                    <p className={styles.icon}><span class="fa fa-wallet"></span></p>
                    <p className={styles.text}>Bills</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer