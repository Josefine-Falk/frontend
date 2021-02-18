import React from 'react';
import { useParams } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import Style from './Navigation.module.scss';

export function Navigation() {
    let { animalId } = useParams();

    return (
        <nav className={Style.pageNavigation}>
            <h2><a href="/Forside">Dyrepasser Intra</a></h2>

            {animalId ? <a href='/Dyrene' className={Style.backArrow}>→</a> : <BurgerMenu />}
        </nav>
    )
}