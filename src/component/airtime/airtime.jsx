import styles from "../../styles/comps/airtime.module.css";
import mtn from "../../assets/mtn.png"
import glo from "../../assets/glo.png"
import airtel from "../../assets/airtel.jpg"
import mobile from "../../assets/9mobile.jpg"

const Airtime = (props) => {
    return <div className={styles.airtime}>
        <form>
            <label>Select an Account</label>
            <select>
                <option value="">Select an Account</option>
                <option value="2020760524">2020760524</option>
                <option value="2020773577">2020773577</option>
                <option value="202077333">2020773333</option>
            </select>

            <label>Select Mobile Operator</label>
            <div className={styles.network}>
                <div><img src={mobile} alt="" /><p className={styles.text}>9Mobile</p></div>
                <div><img src={airtel} alt="" /><p className={styles.text}>airtel</p></div>
                <div><img src={mtn} alt="" /><p className={styles.text}>MTN</p></div>
                <div><img src={glo} alt="" /><p className={styles.text}>glo</p></div>
            </div>
            <div className={styles.form_group}>
                <label>Mobile Number</label>
                <input className={styles.mobile} type="text" name="mobile" placeholder="Mobile Number" />
                <p className={styles.bene}><span>Not in my beneficiaries?</span><span>Select from contacts</span></p>
            </div>
            <div className={styles.form_group}>
                <label>Amount</label>
                <input className={styles.amount} type="text" name="amount" placeholder="0.00" />
                <p className={styles.bene}><span>Schedule Airtime</span><input type="checkbox" /></p>
            </div>
            <p class={styles.submit}><input id={styles.submit} type="submit" value="CONTINUE" /> <span id={styles.thumbprint}></span></p>
        </form>
    </div>
}

export default Airtime