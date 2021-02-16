import { useEffect, useState } from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { doFetch } from '../../Helpers/doFetch';
import { AnimalDetails } from "../AnimalDetails/AnimalDetails";

export function AnimalList() {

    const [listOfAnimals, setListOfAnimals] = useState([]);
    let { url } = useRouteMatch();

    const query = `{
        animalsCollection {
          items {
            sys {
              id
            }
            name
          }
        }
      }`

    const getList = async () => {
        let fetchUrl = 'https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/';

        let response = await doFetch(fetchUrl, query);

        setListOfAnimals(response.data.animalsCollection.items);
    }

    useEffect(() => {
        getList();
        console.log(listOfAnimals);
    }, [])


    return (
        <main>
            {listOfAnimals && listOfAnimals.map((item, i) => {
                return ( 
                    <Link key={item.sys.id} to={`${url}/${item.sys.id}`}><article>{item.name}</article></Link>
                )
            })}
        </main>
    )
}