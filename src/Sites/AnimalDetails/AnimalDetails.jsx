import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Factsheets } from "../../Components/Factsheets/Factsheets";
import { Feedingplan } from "../../Components/Feedingplan/FeedingPlan";
import { Regulation } from "../../Components/Regulation/Regulation";
import { doFetch } from "../../Helpers/doFetch";
import Style from './AnimalDetails.module.scss';

export function AnimalDetails() {

    let { animalId } = useParams();

    const [animalDetails, setAnimalDetails] = useState([]);
    const [isFactsheetActive, setFactsheetActive] = useState(false);
    const [isFeedingplanActive, setFeedingplanActive] = useState(false);
    const [isRegulationActive, setRegulationActive] = useState(false);


    const query = `{
        animalsCollection(where: {
            sys: {
              id_in: "${animalId}"
          }
        }) {
          items {
            sys {
              id
            }
            name
            image{
              url
            }
            factSheet {
              scientificName
            }
          }
        }
      }`

    const getAnimalDetails = async () => {
        let url = 'https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/';

        let response = await doFetch(url, query);
        
        setAnimalDetails(response.data.animalsCollection.items[0]);
    }

    useEffect(() => {
        getAnimalDetails();
    }, [])

    return (
        <main className={Style.mainContainer}>
          {animalDetails.name ?
          <section>
            <header>
              <h2>{animalDetails.name}</h2>
              <img src={animalDetails.image.url} />
            </header>
            <Factsheets isFactsheetActive={isFactsheetActive} setFactsheetActive={setFactsheetActive} setFeedingplanActive={setFeedingplanActive} setRegulationActive={setRegulationActive} />
            <Feedingplan isFeedingplanActive={isFeedingplanActive} setFeedingplanActive={setFeedingplanActive} setFactsheetActive={setFactsheetActive} setRegulationActive={setRegulationActive} />
            <Regulation isRegulationActive={isRegulationActive} setRegulationActive={setRegulationActive} setFactsheetActive={setFactsheetActive} setFeedingplanActive={setFeedingplanActive} />
          </section> : <p>Loading</p>}
        </main>
    )
}