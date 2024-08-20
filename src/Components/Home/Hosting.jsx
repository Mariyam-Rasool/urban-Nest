import styles from './Css/Hosting.module.css'
import image from '../../assets/Hosting/hosting1.png'
import HostingText from './HostingText'

function Hosting() {
  return (
    <div className={`${styles.hosting}`}>
        <img src={image} className={`${styles.image} img-fluid`} alt="..."/>
        <HostingText></HostingText>
        
    </div>
  )
}

export default Hosting