import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import Style from './Navigation.module.scss';

export function Navigation() {
    let { animalId } = useParams();

    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    return (
        <nav className={Style.pageNavigation}>
            <h2><a href="/Forside">Dyrepasser Intra</a></h2>

            {animalId ? <p className={Style.backArrow} onClick={handleClick}>→</p> : <BurgerMenu />}
        </nav>
    )
}