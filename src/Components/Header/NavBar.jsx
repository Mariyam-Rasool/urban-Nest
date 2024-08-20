import styles from './Css/NavBar.module.css'
import UnorderList from './UnorderList'
import SideIcons from './SideIcons'
import { useState } from 'react'
function NavBar() {

  const [isNavbarCollapsed,setIsNavbarCollapsed] = useState(true);

  const handleToggleClick = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed)
  }
  const handelNavLinkClicked = () => {
    setIsNavbarCollapsed(true)

  }

  return (
    <nav className={`${styles.navBarBackground} navbar navbar-expand-lg`}>
        <div className={`${styles.container} container-fluid`}>
          
            <button className={`${styles.toggleButton} navbar-toggler`} type="button" onClick={handleToggleClick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${styles.navBarCollapse} collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
              <UnorderList handelNavLinkClicked={handelNavLinkClicked}></UnorderList>
            </div>
            
            <SideIcons></SideIcons>

        </div>
    </nav>
  )
}

export default NavBar