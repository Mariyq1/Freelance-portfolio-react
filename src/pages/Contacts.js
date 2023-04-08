const Contacts = () => {
    return (  
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Montreal,Canada</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p>+1 (438) 406-99-38</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:m4697597@gmail.com">m4697597@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    );
}
 
export default Contacts;