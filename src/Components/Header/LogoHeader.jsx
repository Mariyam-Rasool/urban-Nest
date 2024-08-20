import { NavLink } from 'react-router-dom'
import { logoImg } from '../../Data/HeaderData'
import styles from './Css/LogoHeader.module.css'

function LogoHeader() {
  return (
     <div className={`${styles.container}`}>
        {logoImg.map((item,index) => (
          <NavLink key={index} className={`${styles.logoLink}`} to={item.link}>
          <img className={`${styles.logo}`} src={item.img} alt="logo" width="30" height="24"/>
          </NavLink>
        ))}
      </div>
  )
}

export default LogoHeader