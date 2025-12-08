import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import style from '../../styles/comps/register.module.css';
import logo from "../../assets/zenith.jpg";
import { toast } from 'react-toastify';
import Cookies from "js-cookie"



const Register = (props) => {

    const navigate = useNavigate()

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const onSubmit = async (values) => {
        const newUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
        }

        await fetch("https://auxiliary.it.com/api/v1/users/auth/register", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json()).then(data => {
            if (data.success) {
                Cookies.set("jwt", data.token)
                sessionStorage.setItem("userInfo", JSON.stringify(data.user))
                toast.success("Signed up successfully");
                setTimeout(() => {
                    navigate("/overview")
                }, 1500)
            }
            else {
                toast.error(data.error)
            }
        })

    }

    const validate = (values) => {
        let errors = {};

        if (!values.firstName) {
            errors.firstName = "This field is required!"
        }

        if (!values.lastName) {
            errors.lastName = "This field is required!"
        }

        if (!values.email) {
            errors.email = "This field is required!";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email format!";
        }

        if (!values.password) {
            errors.password = "This field is required!"
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters!"
        }

        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords are not the same!"
        }

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <div className={style.register}>
            <div className={style.logo}>
                <img src={logo} alt="Zenith_Logo" />
            </div>
            <div className={style.container}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.form_control}>
                        <label>First Name</label>
                        <input type='text' name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.firstName && formik.errors.firstName ? <div className={style.error}>{formik.errors.firstName}</div> : null}
                    </div>
                    <div className={style.form_control}>
                        <label>Last Name</label>
                        <input type='text' name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.lastName && formik.errors.lastName ? <div className={style.error}>{formik.errors.lastName}</div> : null}
                    </div>
                    <div className={style.form_control}>
                        <label>Email</label>
                        <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                    </div>
                    <div className={style.form_control}>
                        <label>Password</label>
                        <input type='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
                    </div>
                    <div className={style.form_control}>
                        <label>Confirm Password</label>
                        <input type='password' name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className={style.error}>{formik.errors.confirmPassword}</div> : null}
                    </div>
                    <div className={style.send}>
                        <button className={style.submit} type='submit'>Register User</button>
                    </div>
                </form>
                <div className={style.haveAcct}>Already have an Account? <Link style={{ fontSize: "16px", textDecoration: 'none' }} to='/'><span>Back to Login</span></Link></div>

            </div>
        </div>
    )
}

export default Register;