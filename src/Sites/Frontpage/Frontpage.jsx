import style from './Frontpage.module.scss';
import logo from '../../Assets/img/techcollege-transparent-logo-hvid.png'

export function Frontpage() {

    return (
        <main id={style.container}>
            <div>
                <img src={logo} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique augue eget mi iaculis aliquet.</p>
                <a href="/Dyrene">Se dyr</a>
            </div>
        </main>
    )
}