import style from './Frontpage.module.scss';
import logo from '../../Assets/img/techcollege-transparent-logo-hvid.png'

export function Frontpage() {

    return (
        <main id={style.container}>
            <div>
                <img src={logo} alt=""/>
                <p>Dette er en side, som skal hjælpe de studerende med at finde informationer om dyrende i stalden.</p>
                <a href="/Dyrene">Se dyr</a>
            </div>
        </main>
    )
}