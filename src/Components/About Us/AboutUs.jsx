import styles from './AboutUs.module.css'
import { aboutUs } from '../../Data/About Us/AboutUsData'
// import { aboutImage } from '../../Data/About Us/AboutUsData'

function AboutUs() {
  return (
    // // <div className={`${styles.container} container-fluid`}>
        
    //     {/* {aboutImage.map((items,index) => (
    //         <div key={index} className={`${styles.aboutImg} container`}>
    //             <img src={items.img} alt="image" />
    //         </div>
    //     ))}
    //      */}
       <div className={`${styles.container} container-fluid`}>
       {aboutUs.map((items,index)=>(
       <dir key={index}>
         <h3 className='fs-lg-3'>{items.heading}</h3>
         {items.description.map((para,paraIndex)=>(
            <div key={paraIndex} className={styles.text}>
                <p  className={styles.paragraph}>{para.desc1}</p>
                <p  className={styles.paragraph}>{para.desc2}</p>
                <p  className={styles.paragraph}>{para.desc3}</p>
                <p  className={styles.paragraph}>{para.desc4}</p>
                <p  className={styles.paragraph}>{para.desc5}</p>
            </div>
         ))}
         </dir>
        ))}
       </div>
    // </div>
  )
}

export default AboutUs