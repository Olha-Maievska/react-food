import React from 'react'

import MealItem from '../components/MealItem'

const MealList = ({ meals }) => {
  return (
    <>
      <div className="catalog-list">
        {meals.map((el) => (
          <MealItem key={el.idMeal} {...el} />
        ))}
      </div>
    </>
  )
}

export default MealList
