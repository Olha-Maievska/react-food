import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Preloader from '../components/Preloader'
import CategoryList from '../components/CategoryList'
import { getAllCategories } from '../api'
import Search from '../components/Search'

const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const { pathname, search } = useLocation()
  const history = useNavigate()

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    )
    history({
      pathname,
      search: `?search=${str}`,
    })
  }

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCatalog(data.categories)
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .includes(search.split('=')[1].toLowerCase())
              )
            : data.categories
        )
      })
      .catch((e) => console.log(e.message))
  }, [search])

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  )
}

export default Home
