import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getFiltedCategory } from '../api'
import Preloader from '../components/Preloader'
import MealList from '../components/MealList'

const Category = () => {
  const [meals, setMeals] = useState([])
  const { name } = useParams()

  let navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  useEffect(() => {
    getFiltedCategory(name).then((data) => setMeals(data.meals))
  }, [name])

  return (
    <>
      <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button className="btn btn-back" onClick={handleClick}>
          Go back
        </button>
      </div>
    </>
  )
}

export default Category
