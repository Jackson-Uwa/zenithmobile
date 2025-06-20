import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import style from "../../styles/comps/login.module.css";
import logo from "../../assets/zenith.jpg"

const Login = (props) => {

    const assign = () =>
        window.location.assign("/overview")


    const [pw, setPw] = useState(false)

    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = (values) => {
        const userLogs = {
            email: values.email,
            password: values.password,
        };
    };

    const validate = (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = "User email is a required field";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email format!";
        }

        if (!values.password) {
            errors.password = "Kindly enter your password";
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters ";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (

        <div className={style.login}>
            <div className={style.logo}>
                <img src={logo} alt="Zenith_logo" />
            </div>
            <div className={style.container}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.form_group}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Enter user email"
                            autoComplete="off"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className={style.error}>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className={style.form_group}>
                        <label>Password</label>
                        <div className={style.password}>
                            <input
                                type={pw ? 'text' : 'password'}
                                name="password"
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter password"
                                autoComplete="off"
                            />
                            <span onClick={() => setPw(!pw)} class={pw ? 'fa fa-eye' : 'fa fa-eye-slash'}></span>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className={style.error}>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <button onClick={() => toast.error("Incorrect user credentials...")} type="submit">Login</button>
                </form>
                <div id={style.suggestions}>
                    <input type="checkbox" />  <span id={style.remember} onClick={assign}>Remember Me? </span>  <span id={style.forgot_password}><Link style={{ textDecoration: 'none', color: 'red' }} to="forgot-password">Forgot Password?</Link></span>
                </div>
                <div className={style.signup}>
                    <p>Don't Have An Account? <Link to="/register" style={{ textDecoration: 'none', color: "#000", letterSpacing: "1px" }}>Sign up for free</Link></p>
                </div>
            </div>
            <p className={style.copy}><span>Copyright</span> &copy; 2025 Zenith Bank Plc. All Rights Reserved </p>

        </div>
    );
};

export default Login;
