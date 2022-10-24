import './App.css';
import { useEffect, useState } from "react";
import image from './food7.jpg'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "ef4eb206";
  const MY_KEY = "813c52c44ebbfa7a3256f388fd90abc5";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");
 
 
  useEffect (() => {
    async function Cook() {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      // console.log(data.hits);
      setMyRecipes(data.hits);
    }
    Cook();
  }, [wordSubmitted])

  
  const myRecipeSearch = (e) => {
      // console.log(e.target.value);
      setMySearch(e.target.value);
  }


const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}


  return (
   
<div>

 <div>
  <img className="header" src={image} alt=""/>
 </div>

    <div className="container">
    <h1>Поиск рецептов</h1>
 </div>

<div className="container">
  <div className='searchBox'>
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
    </form>
  </div>

  <div className='searchBox'>
    <button className="btnSearch" onClick={() => {setWordSubmitted(mySearch)} }>Поиск</button>
  </div>
</div>

<div>
  {myRecipes.map((element, index) => (
  <MyRecipesComponent key={index}
    label={element.recipe.label}
    image={element.recipe.image}
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines}/>
))}
</div>

</div>
  );
}

export default App;
