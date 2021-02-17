import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Factsheets } from "../../Components/Factsheets/Factsheets";
import { doFetch } from "../../Helpers/doFetch";
import Style from './AnimalDetails.module.scss';

export function AnimalDetails() {

    let { animalId } = useParams();

    const [animalDetails, setAnimalDetails] = useState([]);

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
            <Factsheets/>
          </section> : <p>Loading</p>}
        </main>
    )
}