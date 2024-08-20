import styles from './ErrorMessage.module.css'
// import image from '../../assets/Error Bg/errorBg.png'
import image from '../../assets/Error Bg/errorBg.png'
import { Link } from 'react-router-dom'
// import image from '../../assets/Error Bg/errorBg.png'

function ErrorMessage() {
  return (
    <div className={`${styles.container}`}>
    <div className={`${styles.imgDiv}`}>
        <img className={`${styles.img}`} src={image} alt="background" />
    </div>
    <div className={`${styles.errorDiv} container`}>
      <p className={`${styles.errorHeading} `}>404</p>
      <p className={`${styles.errorDesc}`}>We could not find this page.</p>
      <Link className={`${styles.button} btn`} to='/products/all'> Explore More</Link>
    </div>
    </div>
  )
}

export default ErrorMessage