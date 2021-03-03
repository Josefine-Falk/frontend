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
        <article className={Style.introduction}>
            <header id="introduction" className={Style.header} onClick={wrapperFunction}>
                <h3>Introduktion</h3>
                {!isIntroductionActive ? <p>+</p> : <p>-</p>}
            </header>
            
            {isIntroductionActive ?
            <div className={Style.infoContainer}>

                {introduction.siteInformation ?
                <div>
                    <h4>Information</h4>
                    <ul>
                        {introduction.siteInformation.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div> : null}

                {introduction.beforeWorkChecklist ?
                <div>
                    <h4>Inden start på pasning</h4>
                    <ul>
                        {introduction.beforeWorkChecklist.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div> : null}

                {introduction.extraInformation ?
                <div>
                    <h4>Ekstra information</h4>
                    <p>{introduction.extraInformation}</p>
                </div> : null}


            </div> : null} 

        </article>
    )
}