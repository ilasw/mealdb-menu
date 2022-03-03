import React, {useState} from 'react';
import {SearchProp, useRistoMenu} from "@/hooks";
import {MealList, RecapBanner, Sidebar} from "@/components";
import './styles/main.scss';

function App() {
  const [search, setSearch] = useState<SearchProp>(null)
  const {categories, meals, starters, searchResults, ingredients} = useRistoMenu({search});

  return (
      <div className="App">
        <Sidebar {...{search, categories, ingredients}}
                 onClickCategory={(value) => setSearch({what: 'c', value})}
                 onSearchIngredient={(value) => setSearch({what: 'i', value})}
        />

        <main className="Main">
          <h1>TheMealDB Bistro</h1>
          {!search
              ? (<div className="home-results">
                <MealList
                    heading={'Per iniziare'}
                    layout={'slider'}
                    meals={starters}/>

                <MealList
                    heading={'I più acquistati'}
                    layout={'slider'}
                    meals={meals}/>
              </div>)
              : (<div className="search-results">
                <h2 className={'heading'}>Stai cercando per: {search.value}</h2>
                <h3 className={'subheading'}>Hai voglia di altro?
                  <a href="#top"
                     onClick={e => {
                       e.preventDefault();
                       setSearch(null)
                     }}
                     role="button"
                  >Torna in home</a>
                </h3>
                <MealList
                    layout={'list'}
                    meals={searchResults}/>
              </div>)
          }
        </main>

        <RecapBanner/>
      </div>
  );
}

export default App;
