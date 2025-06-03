import { useState } from "react"
import styles from "../../styles/comps/overview.module.css"

const Overview = (props) => {


    const [total_bal, setBal] = useState(true)
    const [acct_bal, setAcctBal] = useState(true)

    const setTotalBalance = () => {
        setBal(!total_bal)
    }

    const setAcctBalance = () => {
        setAcctBal(!acct_bal)
    }

    return (
        <div className={styles.overview}>
            <div className={styles.total}>
                <div className={styles.balance}>
                    <p className={styles.figure}>TOTAL BALANCE</p>

                    <div className={styles.details}>
                        <p className={styles.naira}>
                            <span class="fa fa-naira-sign"></span> <input type={total_bal ? "password" : "text"} value="234,000.00" id={styles.total} readOnly />
                        </p>
                        <p className={styles.show_balance}>
                            Show balance <input type="checkbox" onClick={setTotalBalance} />
                        </p>
                    </div>
                </div>

                <p className={styles.acct_num}>2020760524 - <span>ACTIVE</span></p>


                <p className={styles.username}>JACKSON, UWA IYAMU</p>
                <div className={styles.acct_detail}>
                    <p className={styles.naira_sign}>
                        <span class="fa fa-naira-sign"></span> <input type={acct_bal ? "password" : "text"} value="234,000.00" id={styles.acct} readOnly />
                    </p>
                    <p className={styles.show}>
                        Show balance <input type="checkbox" onClick={setAcctBalance} />
                    </p>
                </div>
            </div>
            <div className={styles.ledger}>
                <p>
                    Ledger Balance: Hidden
                </p>
                <p><span class="fa fa-history"></span> History</p>
            </div>
            <div className={styles.eazylinks}>
                <p className={styles.heading}>eaZyLinks</p>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <div>
                            <span class="fa fa-fingerprint"></span>
                            <p className={styles.text}>QR payments</p>
                        </div>
                        <div>
                            <span class="fa fa-plane-departure"></span>
                            <p className={styles.text}>Travel & Leisure</p>
                        </div>
                        <div>
                            <span class="fa fa-bank"></span>
                            <p className={styles.text}>Other Bank <br />Transfer</p>
                        </div>
                        <div>
                            <span class="fa fa-television"></span>
                            <p className={styles.text}>Cable TV</p>
                        </div>
                    </div>

                    <div className={styles.link_bottom}>
                        <div>
                            <span class="fa fa-money-check"></span>
                            <p className={styles.text}>Cards</p>
                        </div>
                        <div>
                            <span class="fa fa-fingerprint"></span>
                            <p className={styles.text}>MyBVN</p>
                        </div>
                        <div>
                            <span class="fa fa-calendar"></span>
                            <p className={styles.text}>Scheduled <br />Payments</p>
                        </div>
                        <div>
                            <span class="fa fa-wallet"></span>
                            <p className={styles.text}>Customize <br />eaZyLinks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview