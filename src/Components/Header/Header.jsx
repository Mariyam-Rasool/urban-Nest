import styles from './Css/Header.module.css'
import LogoHeader from './LogoHeader'
import NavBar from './NavBar'

function Header() {
  return (
    <div className={`${styles.header}`}>
        <LogoHeader></LogoHeader>
        <NavBar></NavBar>
    </div>
  )
}

export default Header