import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { doFetch } from "../../Helpers/doFetch";
import Style from './Feedingplan.module.scss';

export function Feedingplan() {

        let {animalId} = useParams();
        const [feedingplan, setFeedingplan] = useState([])
        const [isActive, setActive] = useState(false)
    
        const handleToggle = () => {
            setActive(!isActive)
        }

        const query = `{
            animalsCollection(where: { sys: { id_in: "${animalId}"} }) {
                items {
                    sys {
                        id
                    }
                    name
                    feedingPlan {
                        feedingPlanName
                        quantity
                        timePeriod
                        feedingMaterials
                        remarks
                        important
                        amountPerDay
                        dailyFeeding
                        sources
                     }
                }
            }
        }`

        const getFeedingplan = async () => {
            let url = 'https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/'
            let response = await doFetch(url, query)
            setFeedingplan(response.data.animalsCollection.items[0].feedingPlan)
        }
        useEffect(() => {
            getFeedingplan()
        }, [])

    return(
        <article className={Style.feedingplan}>

            <header onClick={handleToggle} className={Style.header}>
                <h3>Foderplan</h3>
                {!isActive ? <p>+</p> : <p>-</p>}
            </header>

            {isActive ? 
            <div className={Style.feedingplanContainer}>
                {feedingplan.feedingPlanName ? <div>
                        <h4>Dyre art</h4>
                        <p>{feedingplan.feedingPlanName}</p>
                    </div> : null}

                {feedingplan.quantity ? <div>
                        <h4>Antal</h4>
                        <p>{feedingplan.quantity}</p>
                    </div> : null}

                {feedingplan.timePeriod ? <div>
                        <h4>Tidsrum</h4>
                        <p>{feedingplan.timePeriod}</p>
                    </div> : null}

                {feedingplan.feedingMaterials ? <div>
                        <h4>Fodermidler</h4>
                        <p>{feedingplan.feedingMaterials}</p>
                    </div> : null}
                
                {feedingplan.remarks ? <div>
                        <h4>Bemærkninger</h4>
                        <p>{feedingplan.remarks}</p>
                    </div> : null}

                {feedingplan.important ? <div>
                        <h4>Vigtigt</h4>
                        <p>{feedingplan.important}</p>
                    </div> : null}

                {feedingplan.amountPerDay ? <div>
                        <h4>Mængde pr. dag</h4>
                        <p>{feedingplan.amountPerDay}</p>
                    </div> : null}

                {feedingplan.dailyFeeding ? <div>
                        <h4>Daglig fodring</h4>
                        <p>{feedingplan.dailyFeeding}</p>
                    </div> : null}

                {feedingplan.sources ? <div>
                        <h4>Kilder</h4>
                        <p>{feedingplan.sources}</p>
                    </div> : null}

            </div> : null}
        </article>
    )
}
