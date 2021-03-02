import { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/doFetch';
import Style from './TechnicalTerms.module.scss';

export function TechnicalTerms(props) {

    const [technicalTerms, setTechnicalTerms] = useState([]);

    let isTechnicalTermsActive = props.isTechnicalTermsActive;
    let setTechnicalTermsActive = props.setTechnicalTermsActive;
    let setIntroductionActive = props.setIntroductionActive;
    let setWorkflowActive = props.setWorkflowActive;

    const handleToggle = () => {
        setTechnicalTermsActive(!isTechnicalTermsActive);
        setWorkflowActive(false);
        setIntroductionActive(false);
    };

    const jumpTo = () => {
        window.location.href = '#technicalTerms';
    };

    const wrapperFunction = () => {
        handleToggle();
        jumpTo();
    };

    const query = `{
        technicalTermsCollection {
          items {
            technicalTerm
            description
            extraInformation
          }
        }
      }`;

    const getTechnicalTerms = async () => {
        let url = "https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/";
        let response = await doFetch(url, query);
        setTechnicalTerms(response.data.technicalTermsCollection.items[0]);
    };

    useEffect(() => {
        getTechnicalTerms();
    }, []);


    return (
        <article>
            <header id="technicalTerms" onClick={wrapperFunction}>
                <h3>Ordbog</h3>
                {!isTechnicalTermsActive ? <p>+</p> : <p>-</p>}
            </header>

        </article>
    )
}