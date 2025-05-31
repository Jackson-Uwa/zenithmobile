import zenith_logo from "../../assets/zenith.jpg"

import styles from "../../styles/pages/header.module.css"

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>  <span onClick={props.clicked} class={props.toggle ? "fa fa-times" : "fa fa-bars"}></span></div>
            <div className={styles.heading}><p>Overview</p></div>
            <div>
                <img src={zenith_logo} alt="Zenith_Bank_Logo" />
            </div>
        </header>
    )
}

export default Header