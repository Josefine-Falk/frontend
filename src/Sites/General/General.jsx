import { useState } from 'react';
import { Introduction } from '../../Components/Introduction/Introduction';
import { TechnicalTerms } from '../../Components/TechnicalTerms/TechnicalTerms';
import { Workflow } from '../../Components/Workflow/Workflow';
import style from './General.module.scss';
import img from '../../Assets/img/rive-og-spade.png';

export function General() {

    const [isIntroductionActive, setIntroductionActive] = useState(false);
    const [isWorkflowActive, setWorkflowActive] = useState(false);
    const [isTechnicalTermsActive, setTechnicalTermsActive] = useState(false);

    return (
        <main className={style.mainContainer}>
            <section>
                <header>
                    <h2>General information</h2>
                    <img src={img} />
                </header>

                <Introduction isIntroductionActive={isIntroductionActive} setIntroductionActive={setIntroductionActive} setWorkflowActive={setWorkflowActive} setTechnicalTermsActive={setTechnicalTermsActive} />
                <Workflow isWorkflowActive={isWorkflowActive} setIntroductionActive={setIntroductionActive} setWorkflowActive={setWorkflowActive} setTechnicalTermsActive={setTechnicalTermsActive} />
                <TechnicalTerms isTechnicalTermsActive={isTechnicalTermsActive} setIntroductionActive={setIntroductionActive} setWorkflowActive={setWorkflowActive} setTechnicalTermsActive={setTechnicalTermsActive} />                
            </section>
        </main>
    )
}