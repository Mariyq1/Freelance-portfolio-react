import "./style.css";

const Header = () => {
    return (  
    <header className="header">
        <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em>Mariya</em></strong><br/>
            a frontend developer
        </h1>
        <div className="header__text">
            <p>with passion for learning and creating.</p>
        </div>
        <a href="file:///C:/Users/Utilisateur/Desktop/Other/MashaCV/New/MariyaPugachova.pdf" className="btn">Download CV</a>
        </div> 
   </header>);
}
 
export default Header;