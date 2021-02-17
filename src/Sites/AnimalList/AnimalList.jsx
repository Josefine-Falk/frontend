import { useEffect, useState } from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { doFetch } from '../../Helpers/doFetch';
import Style from './AnimalList.module.scss';

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
            image {
                url
            }
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
    }, [])


    return (
        <main className={Style.mainContainer}>
            {listOfAnimals && listOfAnimals.map((item, i) => {
                return ( 
                    <Link key={item.sys.id} to={`${url}/${item.sys.id}`}>
                        <article>
                            <img src={item.image.url} alt=""/>
                            <header>
                                <h2>{item.name}</h2>
                                <p>- se mere -</p>
                            </header>
                        </article>
                    </Link>
                )
            })}
        </main>
    )
}