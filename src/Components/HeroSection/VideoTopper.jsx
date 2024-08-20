import styles from './Css/VideoTopper.module.css'
import { heroTextDetails } from '../../Data/HomePage/HeroSectionData'
import { Link } from 'react-router-dom'

function VideoTopper() {
  return (
    <div className={`${styles.container} container`}>
      
        {heroTextDetails.map((item,index)=>(
          <div key={index} className={`${styles.text} card-body`}>
            <h5 className={`${styles.heading} card-title`}>{item.heading}</h5>
            <p className={`${styles.year} card-title`}>{item.year}</p>
            <p className={`${styles.para} card-title`}>{item.para}</p>
            <Link to={item.link} className={`${styles.button} btn `}>{item.buttonName}</Link>
          </div>
      ))}
        
      
    </div>
  )
}

export default VideoTopper