import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealById } from '../api'
import Preloader from '../components/Preloader'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()
  let navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]))
  }, [id])

  return (
    <>
      <button
        className="btn btn-back"
        style={{ margin: '20px 0' }}
        onClick={handleClick}
      >
        Go back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2>{recipe.strMeal}</h2>
          <h6>
            <span style={{ fontWeight: 700 }}>Category: </span>
            {recipe.strCategory}
          </h6>
          {recipe.strArea ? (
            <h6>
              <span style={{ fontWeight: 700 }}>Area:</span> {recipe.strArea}
            </h6>
          ) : null}
          <p>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Measure</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  )
                }
                return null
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: '20px 0' }}>Video recipe</h5>
              <iframe
                title={recipe.strMeal}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}

export default Recipe
