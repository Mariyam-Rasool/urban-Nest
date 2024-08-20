import { Link } from 'react-router-dom'
import styles from './Css/HostingText.module.css'

function HostingText() {
  return (
    <div className={`${styles.container} container-fluid`}>
                <p className={`${styles.para} card-title`}>ELEVATE EVERYDAY ENTERTAINING</p>
                <h5 className={`${styles.heading} card-title`}>Hosting Essentials Edit</h5>
                <Link to='/products/decor' className={`${styles.button} btn `}>SHOP NOW</Link>
    </div>
  )
}

export default HostingText