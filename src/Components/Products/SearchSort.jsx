import styles from './Css/SearchSort.module.css'

function SearchSort({ handleSorting, handleSearch }) {
    const handleSortChange = (event) => {
      handleSorting(event.target.value);
    };
  
    const handleSearchChange = (event) => {
      handleSearch(event.target.value);
    };
  
    return (
      <div className={`${styles.topDiv} container-fluid`}>
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={handleSearchChange}
            className={`${styles.search} form-control me-2`}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
            
             <select className={` ${styles.select}form-select`} aria-label="Default select example" onChange={handleSortChange}>
                <option value='' className={`${styles.dropItems} `} >Sort BY</option>
                <option value='asc' className={`${styles.dropItems} `}>Alphabetically A to Z</option>
                <option value='desc' className={`${styles.dropItems} `}>Alphabetically Z to A</option>
                <option value='low'  className={`${styles.dropItems} `} >Price Low to high</option>
                <option value='high' className={`${styles.dropItems} `} >Price High to low</option>
            </select>
             
        </div>
  )
}

export default SearchSort

{/* <div className={`${styles.dropdown} dropdown`}>
                <button className={`${styles.dropButton} btn dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort By
                </button>
                <ul className={`${styles.list} dropdown-menu`}>
                    <li className={`${styles.dropItems} dropdown-item`} onClick={() => handleSorting('asc')}>Alphabetically A to Z</li>
                    <li className={`${styles.dropItems} dropdown-item`} onClick={() => handleSorting('desc')}>Alphabetically Z to A</li>
                    <li className={`${styles.dropItems} dropdown-item`} onClick={() => handleSorting('low')}>Price Low to high</li>
                    <li className={`${styles.dropItems} dropdown-item`} onClick={() => handleSorting('high')}>Price High to low</li>
                </ul>
             </div> */}