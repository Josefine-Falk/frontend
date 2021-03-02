import { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/doFetch';
import Style from './Introduction.module.scss';

export function Introduction(props) {

    const [introduction, setIntroduction] = useState([]);

    let isIntroductionActive = props.isIntroductionActive;
    let setTechnicalTermsActive = props.setTechnicalTermsActive;
    let setIntroductionActive = props.setIntroductionActive;
    let setWorkflowActive = props.setWorkflowActive;

    const handleToggle = () => {
        setIntroductionActive(!isIntroductionActive);
        setWorkflowActive(false);
        setTechnicalTermsActive(false);
    };

    const jumpTo = () => {
        window.location.href = '#introduction';
    };

    const wrapperFunction = () => {
        handleToggle();
        jumpTo();
    };

    const query = `{
        introductionCollection {
            items {
                siteInformation
                beforeWorkChecklist
                extraInformation
            }
        }
    }`;

    const getIntroduction = async () => {
        let url = "https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/";
        let response = await doFetch(url, query);
        setIntroduction(response.data.introductionCollection.items[0]);
    };

    useEffect(() => {
        getIntroduction();
    }, []);

    return (
        <article>
            <header id="introduction" onClick={wrapperFunction}>
                <h3>Introduktion</h3>
                {!isIntroductionActive ? <p>+</p> : <p>-</p>}
            </header>

        </article>
    )
}