import styles from "../../styles/comps/bills.module.css";

const Bills = (props) => {
    return <div className={styles.bills}>
        <form>
            <p className={styles.payment}><span id={styles.pay_history}>Bills Payment History</span><span class="fa fa-caret-right"></span></p>
            <label>Select Biller Collection</label>
            <div className={styles.merchants}>
                <div className={styles.merchant} id={styles.merchant}>
                    <i class="fa fa-calendar"></i>
                    <p className={styles.text}>Zenith Billers</p>
                </div>
                <div className={styles.merchant} id={styles.merchant}><i class="fa fa-circle-user"></i><p className={styles.text}>Quickteller<br /> Merchants</p></div>
                <div className={styles.merchant}><i class=""></i><p className={styles.text}><br /></p></div>
                <div className={styles.merchant}><i class=""></i><p className={styles.text}><br /></p></div>
            </div>
            <div className={styles.form_group}>
                <label>Select an Account</label>
                <select>
                    <option value="">Select Account</option>
                    <option value="2020760524">2020760524</option>
                    <option value="2020773577">2020773577</option>
                    <option value="202077333">2020773333</option>
                </select>
            </div>
            <div className={styles.form_group}>
                <label>Select Category</label>
                <select>
                    <option value="">Select Category</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
        </form>
    </div>
}

export default Bills