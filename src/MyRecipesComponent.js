function MyRecipesComponent({label, image, calories, ingredients}) {
    return (
        <div>
            <div className="container">
                <h2>{label} ({calories.toFixed()} calories)</h2>
            </div>

            <div className="AboutRecipe">
                <div className="ImgRecipe">
                    <img className="tasty" src={image} alt="" width="250px"/>
                </div>

            <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            </div>
        </div>
    )
}

export default MyRecipesComponent;