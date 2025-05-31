import { useNavigate } from "react-router";
import styles from '../styles/components/nav.module.scss';
import { useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Nav({ user }){
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    // handleClick on hamburgerMenu
    const handleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen);
    }

    return(
        <nav id={styles.navContainer}>
            <div id={styles.upperNav}>
                <RxHamburgerMenu id="hamburger" style={hamburgerOpen ? {transform:"rotate(90deg)"} : {transform:"rotate(0deg)"}} className={styles.hamburger} onClick={handleHamburger}/>
                <h1 onClick={() => navigate("/")}>Life</h1>
                <div id={styles.loginContainer}>
                    <button>Login</button>
                    <button>Signup</button>
                </div>
            </div>
            <div id={styles.lowerNav}>
                {hamburgerOpen && 
                <ul id={styles.hiddenNav}>
                    <li style={currentPage === "/todo" ? {textDecoration: "underline"} : {}} onClick={() => navigate("/todo")}>To-Do</li>
                    <li style={currentPage === "/calendar" ? {textDecoration: "underline"} : {}} onClick={() => navigate("/calendar")}>Calendar</li>
                    <li style={currentPage === "/goals" ? {textDecoration: "underline"} : {}} onClick={() => navigate("/goals")}>Goals</li>
                </ul>}
            </div>
        </nav>
    )
}