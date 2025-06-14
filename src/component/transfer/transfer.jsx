import styles from "../../styles/comps/transfers.module.css";

import { Link } from "react-router-dom";

const Transfer = (props) => {

    return <div className={styles.transfers}>
        <div className={styles.intro}>
            <p className={styles.transfer_history}>

                <Link to="/transfer/user/transferHistory" style={{ textDecoration: 'none', color: 'red' }}>
                    Transfer History

                </Link>
            </p>
            <p className={styles.saved}>
                <Link to="/transfer/user/savedPayments" style={{ textDecoration: 'none', color: 'red' }}>
                    Saved Transfers
                </Link>
            </p>
        </div>

        <form>
            <label>Select Transfer Mode</label>
            <div className={styles.banks}>
                <div className={styles.bank}>
                    <i class="fa fa-user"></i>
                    <p className={styles.text}>Own<br /> Account</p>
                </div>
                <div className={styles.bank}><i class="fa fa-bank"></i><p className={styles.text}>Zenith<br /> Bank</p></div>
                <div className={styles.bank}><i class="fa fa-bank"></i><p className={styles.text}>Other<br /> Banks</p></div>
                <div className={styles.bank}><i class="fa fa-globe"></i><p className={styles.text}>Foreign<br /> Transfers</p></div>
            </div>
            <div className={styles.form_group}>
                <label>Select Source Account</label>
                <select>
                    <option value="">Select Account</option>
                    <option value="2020760524">2020760524</option>
                    <option value="2020773577">2020773577</option>
                    <option value="202077333">2020773333</option>
                </select>
            </div>
            <div className={styles.form_group}>
                <label>Select Destination Account</label>
                <select>
                    <option value="">Select Account</option>
                    <option value="2020760524">2020760524</option>
                    <option value="2020773577">2020773577</option>
                    <option value="202077333">2020773333</option>
                </select>
            </div>
            <div className={styles.form_group}>
                <label>Amount</label>
                <input className={styles.amount} type="text" name="amount" placeholder="0.00" />
            </div>
            <div className={styles.form_group}>
                <label>Transaction Description</label>
                <input className={styles.desc} type="text" name="desc" placeholder="Transaction Description" />
                <p className={styles.bene}><span>Schedule Transfer</span><input type="checkbox" /></p>
            </div>
            <p class={styles.submit}><input id={styles.submit} type="submit" value="CONTINUE" /> <span id={styles.thumbprint}></span></p>
        </form>
    </div>
}

export default Transfer;