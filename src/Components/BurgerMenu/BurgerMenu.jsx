import { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './BurgerMenu.module.scss';

export function BurgerMenu() {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div className={isActive ? Style.burgerMenuActive : Style.burgerMenu} onClick={handleToggle}>
                <div className={Style.burgerMenuLine}></div>
                <div className={Style.burgerMenuLine}></div>
                <div className={Style.burgerMenuLine}></div>
            </div>

            <ul className={isActive ? Style.activeMenu : Style.menu}>
                <li><Link className={Style.navigationLinks} to="/Forside" onClick={handleToggle}>Forside</Link></li>
                <li><Link className={Style.navigationLinks} to="/Dyrene" onClick={handleToggle}>Dyrene</Link></li>
                <li><Link className={Style.navigationLinks} to="/Generelt" onClick={handleToggle}>Generelt</Link></li>
                {/*<li><Link className={Style.navigationLinks} to="/Kontakt" onClick={handleToggle}>Kontakt</Link></li>*/}
            </ul>
        </>
    )
}