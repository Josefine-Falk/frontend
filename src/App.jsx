import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import {useState, useEffect} from "react";

const query = `{
  animalsCollection {
    items {
      sys {
        id
      }
      name
      factSheet {
        factSheetName
        scientificName
      }
      feedingPlan {
        feedingPlanName
        species
      }
      regulation {
        regulationName
        enclosure
      }
    }
  }
}`

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
      fetch(`https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer jvyZIc3LAqCECaDNCf4mogf9DKCkkfNsihfWC-U--xE",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.animalsCollection.items);
      });
  }, []);


  const [animalInfo, setAnimalInfo] = useState([])

  const getAnimalInfo = async (id) => {

    const query = `{
      animalsCollection(where: {
          sys: {
            id_in: "${id}"
        }
      }) {
        items {
          sys {
            id
          }
          name
          factSheet {
            factSheetName
            scientificName
          }
          feedingPlan {
            feedingPlanName
            species
          }
          regulation {
            regulationName
            enclosure
          }
        }
      }
    }`

    const fetchIt = async () => {
      fetch(`https://graphql.contentful.com/content/v1/spaces/6jz8r9ndp7ne/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer jvyZIc3LAqCECaDNCf4mogf9DKCkkfNsihfWC-U--xE",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
        .then(({ data, errors }) => {
          if (errors) {
            console.error(errors);
          }
  
          setAnimalInfo(data.animalsCollection.items);
        });
    }

    fetchIt()
  }

  console.log(animalInfo)



  return (
    <Router>
      <Switch>
        <Route exact path="/Forside">

        <div className="App">
      <header className="App-header">

        {page ? page.map((p, index) => {
          return (
            <p onClick={() => getAnimalInfo(p.sys.id)} key={index}>{p.name}</p>
          )
        }) : null }

        {animalInfo.length > 0 ? animalInfo.map((a, index) => {
          return (
            <div key={index}>
              <p>{animalInfo[0].factSheet.factSheetName}</p>
              <p>{animalInfo[0].feedingPlan.feedingPlanName}</p>
              <p>{animalInfo[0].regulation.regulationName}</p>
            </div>
          )
        }) : null}
      </header>
    </div>


        </Route>

        <Route exact path="/Dyrene"></Route>

        <Route exact path="/Kontakt"></Route>

        <Route exact path="/">
          <Redirect to="/Forside" />
        </Route>

        <Route path="/">
          <p>Denne side findes ikke</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;