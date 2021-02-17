import style from './Frontpage.module.scss';
import logo from '../../Assets/img/techcollege-transparent-logo-hvid.png'

export function Frontpage() {

    return (
        <main id={style.container}>
            <div>
                <img src={logo} alt=""/>
                <p>Lidt tekst</p>
            </div>
        </main>
    )
}