import { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/doFetch';
import Style from './Workflow.module.scss';

export function Workflow(props) {

    const [workflow, setWorkflow] = useState([]);

    let isWorkflowActive = props.isWorkflowActive;
    let setTechnicalTermsActive = props.setTechnicalTermsActive;
    let setIntroductionActive = props.setIntroductionActive;
    let setWorkflowActive = props.setWorkflowActive;

    const handleToggle = () => {
        setWorkflowActive(!isWorkflowActive);
        setIntroductionActive(false);
        setTechnicalTermsActive(false);
    };

    const jumpTo = () => {
        window.location.href = '#workflow';
    };

    const wrapperFunction = () => {
        handleToggle();
        jumpTo();
    };

    const query = `{
            generalWorkflowCollection {
            items {
              workflow
              importantInformation
            }
          }
        }`;

    const getWorkflow = async () => {
        let url = "https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/";
        let response = await doFetch(url, query);
        setWorkflow(response.data.generalWorkflowCollection.items[0]);
    };

    useEffect(() => {
        getWorkflow();
    }, []);

    return (
        <article className={Style.workflow}>
            <header id="workflow" className={Style.header} onClick={wrapperFunction}>
                <h3>General arbejdsgang</h3>
                {!isWorkflowActive ? <p>+</p> : <p>-</p>}
            </header>
            {isWorkflowActive ? 
            <div className={Style.workflowContainer}>
                
                {workflow.workflow ?
                <div>
                    <h4>Arbejdsgang</h4>
                    <ul>
                        {workflow.workflow.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>                   
                </div> : null}

                {workflow.importantInformation ? 
                <div>
                    <h4>Vigtig information</h4>
                    <p>{workflow.importantInformation}</p>
                </div> : null}

            </div> : null} 
            
        </article>
    )
}