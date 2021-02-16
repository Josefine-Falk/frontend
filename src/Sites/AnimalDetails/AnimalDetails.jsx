import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router"
import { doFetch } from "../../Helpers/doFetch";

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
            factSheet {
              scientificName
            }
          }
        }
      }`

    const getAnimalDetails = async () => {
        let url = 'https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/';

        let response = await doFetch(url, query);
        
        setAnimalDetails(response.data.animalsCollection.items);
    }

    useEffect(() => {
        getAnimalDetails();
    }, [])

    return (
        <main>
            <p>dette er et dyr</p>
        </main>
    )
}