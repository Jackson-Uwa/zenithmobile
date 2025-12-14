import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/zenith.jpg";
import style from "../../styles/comps/forgot.module.css";

const ForgotPassword = (props) => {

    const navigate = useNavigate();

    const initialValues = {
        email: "",
    };

    const onSubmit = async (values) => {
        const userLogs = {
            email: values.email,
        };

        await fetch("https://auxiliary.it.com/api/v1/users/auth/forgot-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogs)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                console.log(data)
                navigate("/reset-password")
            } else {
                toast.error(data.error)
            }
        })

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

        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });


    return (
        <div className={style.forgot}>
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

                    <button type="submit">Send</button>
                </form>

                <div className={style.inquiry}>
                    <Link to="/" style={{ textDecoration: 'none', color: "#000", letterSpacing: "1px" }}>Back to Login</Link>
                </div>
            </div>
            <p className={style.copy}><span>Copyright</span> &copy; 2025 Zenith Bank Plc. All Rights Reserved </p>
        </div>
    )
}

export default ForgotPassword;