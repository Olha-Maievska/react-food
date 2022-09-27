import CategoryItem from './CategoryItem'

const CategoryList = ({ catalog = [] }) => {
  return (
    <>
      <h2 className="title-list">Category</h2>
      <div className="catalog-content">
        <div className="catalog-list">
          {catalog.map((el) => (
            <CategoryItem key={el.idCategory} {...el} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoryList
