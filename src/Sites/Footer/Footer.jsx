import style from './Footer.module.scss';
import logo from '../../Assets/img/techcollege-transparent-logo-hvid.png'

export function Footer() {

    return (
        <footer id={style.container}>
            <div>
                <h2>Kontakt Louise Møller</h2>
                <div>
                    <p><strong>Telefon:</strong></p>
                    <a href="tel:+45 25 26 64 67">+45 25 26 64 67</a>
                </div>
                <div>
                    <p><strong>E-mail:</strong></p><a href="mailto:lomo@techcollege.dk">lomo@techcollege.dk</a>
                </div>
            </div>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                <p>Lavet af Webudvikler, TECHCOLLEGE for Agri, TECHCOLLEGE.</p>
            </div>
        </footer>
    )
}