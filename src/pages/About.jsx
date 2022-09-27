import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  let navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <div>
      <button
        className="btn btn-back"
        style={{ margin: '20px 0' }}
        onClick={handleClick}
      >
        Go back
      </button>
      <h3 className="title-list">About TheMealDB</h3>
      <p>
        TheMealDB was built in 2016 to provide a free data source api for
        recipes online in the hope that developers would build applications and
        cool projects ontop of it. TheMealDB originated on the Kodi forums as a
        way to browse recpies on your TV.
      </p>

      <span>Link</span>

      <a href="https://www.themealdb.com/" target="_blanket">
        : https://www.themealdb.com/
      </a>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <img
          src="https://raw.githubusercontent.com/zag2me/script.screensaver.themealdb/master/icon.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default About
