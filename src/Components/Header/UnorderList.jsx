import { NavLink } from 'react-router-dom'
import { navBarItems } from '../../Data/HeaderData'
import styles from './Css/UnorderList.module.css'

function UnorderList({handelNavLinkClicked}) {
  // return (
  //   <ul className={`${styles.sideBar} navbar-nav  mb-2 mb-lg-0`}>
      
  //     {navBarItems.map((items,index) => (
  //           <li key={index}  className={`${styles.navItem} nav-item`}>
  //               <NavLink onClick={handelNavLinkClicked} className={`${styles.navLink} nav-link active`} aria-current="page" to={items.link}>{items.label}</NavLink>
  //           </li>
  //     ))}
                  
  //    </ul>
  // )

    return (
      <ul className={`${styles.sideBar} navbar-nav mb-2 mb-lg-0`}>
        {navBarItems.map((item, index) => (
          <li key={index} className={`${styles.navItem} nav-item ${item.dropdown ? 'dropdown' : ''}`} >
            {item.dropdown ? (
              <>
                <NavLink to={item.link} className={`${styles.navLink} nav-link dropdown-toggle`} id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown"aria-expanded="false">
                  {item.label}
                </NavLink>
                <ul className={`${styles.dropdownBox} dropdown-menu`} aria-labelledby={`navbarDropdown${index}`}>

                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink className={`${styles.dropdownLinks} `} onClick={handelNavLinkClicked} key={subIndex} to={subItem.link}>
                        <p   className={styles.dropdownLi} >
                          {subItem.label}
                        </p>
                      </NavLink>
                    ))}
                </ul>
              </>
            ) :
             (
              <NavLink onClick={handelNavLinkClicked} className={`${styles.navLink} nav-link`} to={item.link}>
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    );
  }
  


export default UnorderList