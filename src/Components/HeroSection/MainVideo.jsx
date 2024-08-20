import {heroVideo} from '../../Data/HomePage/HeroSectionData'
import styles from './Css/MainVideo.module.css'
import VideoTopper from './VideoTopper'

function MainVideo() {
  return (
        <div className={`${styles.container}`}>
                {heroVideo.map((item,index)=>(
                <video key={index} className={`${styles.bgVideo}`} autoPlay muted loop>
                        <source src={item.bgVideo} type="video/mp4" />
                </video>
                ))}
                <VideoTopper></VideoTopper>
                
        </div>

        
)
}

export default MainVideo