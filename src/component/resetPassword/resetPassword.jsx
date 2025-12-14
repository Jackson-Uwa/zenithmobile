import style from "../../styles/comps/resetPassword.module.css";
import logo from "../../assets/zenith.jpg";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = (props) => {

    const [pw, setPw] = useState(false)

    const navigate = useNavigate();

    const initialValues = {
        password: "",
        confirmPassword: "",
    };

    const onSubmit = async (values) => {
        const userLogs = {
            password: values.password,
            confirmPassword: values.confirmPassword,
        };

        await fetch("https://auxiliary.it.com/api/v1/users/auth/reset-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogs)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                console.log(data)
                navigate("/overview")
            } else {
                toast.error(data.error)
            }
        })

    };

    const validate = (values) => {
        let errors = {};

        if (!values.password) {
            errors.password = "Password is a required field";
        } else if (!values.confirmPassword) {
            errors.confirmPassword = "Kindly, confirm your password";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });


    return (
        <div className={style.reset}>
            <div className={style.logo}>
                <img src={logo} alt="Zenith_logo" />
            </div>
            <div className={style.container}>
                <form onSubmit={formik.handleSubmit}>
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

                    <div className={style.form_group}>
                        <label>Confirm Password</label>
                        <div className={style.confirm}>
                            <input
                                type={pw ? 'text' : 'password'}
                                name="password"
                                value={formik.values.confirmPassword}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Confirm password"
                                autoComplete="off"
                            />
                            <span onClick={() => setPw(!pw)} class={pw ? 'fa fa-eye' : 'fa fa-eye-slash'}></span>
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className={style.error}>{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>


                    <button type="submit">Send</button>
                </form>
            </div>
            <p className={style.copy}><span>Copyright</span> &copy; 2025 Zenith Bank Plc. All Rights Reserved </p>
        </div>
    )
}

export default ResetPassword;