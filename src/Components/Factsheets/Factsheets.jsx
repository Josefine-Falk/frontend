import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doFetch } from "../../Helpers/doFetch";
import Style from './Factsheet.module.scss';

export function Factsheets(props) {
    let {animalId} = useParams();
    const [factsheet, setFactsheet] = useState([]);

    let isFactsheetActive = props.isFactsheetActive;
    let setFactsheetActive = props.setFactsheetActive;
    let setFeedingplanActive = props.setFeedingplanActive;
    let setRegulationActive = props.setRegulationActive;

    const handleToggle = () => {
        setFactsheetActive(!isFactsheetActive);
        setFeedingplanActive(false);
        setRegulationActive(false);
    };



    const query = `{
        animalsCollection(where: { sys: { id_in: "${animalId}"} }) {
            items {
                sys {
                    id
                }
                name
                factSheet {
                    factSheetName
                    scientificName
                    popularName
                    englishName
                    species
                    habitat
                    naturalHabitat
                    size
                    weight
                    lifeExpectancy
                    sexuallyMature
                    gestation
                    littersize
                    incubation
                    food
                    biology
                    additionalInformation
                }
            }
        }
    }`

      const getFactsheets = async () => {
            let url = 'https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/';
            let response = await doFetch(url, query);
            setFactsheet(response.data.animalsCollection.items[0].factSheet);
      }
      useEffect(()=> {
        getFactsheets();
      }, []);

    return(
        <article className={Style.factsheet}>
            <header onClick={handleToggle} className={Style.header}>
                <h3>Fakta</h3>
                {!isFactsheetActive ? <p>+</p> : <p>-</p>}
            </header>
            {isFactsheetActive ? 
                <div className={Style.factContainer}>
                    {factsheet.scientificName ? <div>
                        <h4>Videnskabeligt navn</h4>
                        <p>{factsheet.scientificName}</p>
                    </div> : null}
                    
                    {factsheet.popularName ? <div>
                        <h4>Populært navn</h4>
                        <p>{factsheet.popularName}</p>
                    </div> : null}

                    {factsheet.englishName ? <div>
                        <h4>Engelsk navn</h4>
                        <p>{factsheet.englishName}</p>
                    </div> : null}

                    {factsheet.species ? <div>
                        <h4>Art</h4>
                        <p>{factsheet.species}</p>
                    </div> : null}

                    {factsheet.habitat ? <div>
                        <h4>Habitat</h4>
                        <p>{factsheet.habitat}</p>
                    </div> : null}

                    {factsheet.naturalHabitat ? <div>
                        <h4>Naturlig habitat</h4>
                        <p>{factsheet.naturalHabitat}</p>
                    </div> : null}

                    {factsheet.size ? <div>
                        <h4>Størrelse</h4>
                        <p>{factsheet.size}</p>
                    </div> : null}

                    {factsheet.weight ? <div>
                        <h4>Vægt</h4>
                        <p>{factsheet.weight}</p>
                    </div> : null}

                    {factsheet.lifeExpectancy ? <div>
                        <h4>Levealder</h4>
                        <p>{factsheet.lifeExpectancy}</p>
                    </div> : null}

                    {factsheet.sexuallyMature ? <div>
                        <h4>Kønmoden</h4>
                        <p>{factsheet.sexuallyMature}</p>
                    </div> : null}

                    {factsheet.gestation ? <div>
                        <h4>Drægtidhed</h4>
                        <p>{factsheet.gestation}</p>
                    </div> : null}

                    {factsheet.littersize ? <div>
                        <h4>Kuldstørrelse</h4>
                        <p>{factsheet.littersize}</p>
                    </div> : null}

                    {factsheet.incubation ? <div>
                        <h4>Rugetid</h4>
                        <p>{factsheet.incubation}</p>
                    </div> : null}

                    {factsheet.food ? <div>
                        <h4>Føde</h4>
                        <p>{factsheet.food}</p>
                    </div> : null}

                    {factsheet.biology ? <div>
                        <h4>Biologi</h4>
                        <p>{factsheet.biology}</p>
                    </div> : null}

                    {factsheet.additionalInformation ? <div>
                        <h4>Øvrige informationer</h4>
                        <p>{factsheet.additionalInformation}</p>
                    </div> : null}

                    {factsheet.sources ? <div>
                        <h4>Kilder</h4>
                        <p>{factsheet.sources}</p>
                    </div> : null}
                    
                </div>  : null}
        </article>
    )
}