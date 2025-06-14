import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

import styles from "../../styles/comps/login.module.css"

const Login = (props) => {

    let location = useLocation()

    return (<div className={styles.login}>
        <h1>Login User</h1>

        <form onSubmit={(e) => {
            e.preventDefault()
            // window.location("/overview")
        }}>
            <fieldset>
                <legend>Please enter credentials</legend>

                <div>
                    <label>User e-mail*</label>
                    <input type="email" placeholder="Kindly enter email address" name="email" />

                </div>

                <div>
                    <label>User password*</label>
                    <input type="password" placeholder="Kindly enter your password" name="password" />

                </div>
                <Link to="/overview">
                    <input type="submit" value="Access" />
                </Link>
            </fieldset>
        </form>
    </div>)
}

export default Login