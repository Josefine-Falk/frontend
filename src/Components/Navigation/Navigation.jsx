import { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './Navigation.module.scss';

export function Navigation() {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <nav className={Style.pageNavigation}>
            <div className={isActive ? Style.burgerMenuActive : Style.burgerMenu} onClick={handleToggle}>
                <div className={Style.burgerMenuLine}></div>
                <div className={Style.burgerMenuLine}></div>
                <div className={Style.burgerMenuLine}></div>
            </div>

            <h2>Dyrepasser Intra</h2>

            <ul>
                <li><Link className={Style.navigationLinks} to="/Forside">Forside</Link></li>
                <li><Link className={Style.navigationLinks} to="/Dyrene">Dyrene</Link></li>
                <li><Link className={Style.navigationLinks} to="/Kontakt">Kontakt</Link></li>
            </ul>
        </nav>
    )
}