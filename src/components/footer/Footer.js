import "./style.css";
import linkedin from "../../img/icons/linkedIn.svg";
import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";

const Footer = () => {
    return (
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
        <ul className="social">
            <li className="social__item">
                <a href="https://www.linkedin.com/in/mariya-pugachova/">
                    <img src={linkedin} alt="link"/>
                </a>
            </li>
            <li className="social__item">
                <a href="#!">
                    <img src={instagram} alt="link"/>
                </a>
            </li>
            <li className="social__item">
                <a href="https://github.com/Mariyq1">
                    <img src={gitHub} alt="link"/>
                </a>
            </li>
        </ul>
        <div className="copyright">
            <p>2023</p>
        </div>
        </div>
    </div>
   </footer>);
}
 
export default Footer;