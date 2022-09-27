import { useState } from 'react'

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('')

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    cb(value)
  }

  return (
    <div className="row" style={{ marginTop: '50px' }}>
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          style={{ padding: '0 0 0 10px' }}
        />
        <button
          className="btn"
          style={{
            position: 'absolute',
            top: 0,
            right: '-10px',
            height: '45px',
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
