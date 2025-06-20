import styles from "../../styles/comps/welcome.module.css";

import caret_down from "../../assets/caret-down.jpg";

const Welcome = (props) => {

    return (
        <div className={styles.welcome}>
            <main>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img src={caret_down} alt="Logo" />
                    </div>
                    <h2>UPDATE YOUR</h2>
                    <h2>Personal <br /> Information</h2>

                    <div className={styles.details}>
                        <p id={styles.customer}>Dear Valued Customer,</p>
                        <p id={styles.inform}>Stay informed of transactions on your account by updating your "<b>Email Address</b> and "<b>Phone Number</b>" in our Database.</p>

                        <h4>Simply;</h4>
                        <ol>
                            <li>Go to <b>"Settings"</b> in the menu bar</li>
                            <li>Select <b>"Update Account Information"</b>.</li>
                            <li>Enter your <b>"email address"</b> and <b>"mobile number"</b>.</li>
                            <li>Enter your <b>PIN Hardware/e-token code</b> to confirm.</li>
                        </ol>
                    </div>

                    <p id={styles.visit}>Or visit the nearest Zenith Bank Branch.</p>

                    <footer>Thank you.</footer>
                </div>
            </main>
            <div onClick={props.close} className={styles.close}>Close</div>
        </div>
    )

}

export default Welcome;