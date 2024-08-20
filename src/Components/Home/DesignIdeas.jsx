import styles from './Css/DesignIdeas.module.css'
import { designItems } from '../../Data/HomePage/DesignData'

function DesignIdeas() {
  return (
    <div className={`${styles.containerDiv} container-fluid text-center`}>
        <div className={styles.Heading}>DESIGN IDEAS</div>
        <div className={`${styles.row} row`}>
            {/* Map */}
            {designItems.map((items,index)=>(
                <div key={index} className={`${styles.col} col-lg-4 col-md-6 col-sm-12 mb-4`}>
                    <div className={`${styles.card} card`}>
                        <img src={items.img} className={`${styles.cardImg} card-img-top`} alt="image"/>
                        <div className={`${styles.cardBody} card-body`}>
                            <p className={`${styles.cardText} card-text`}>{items.para}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default DesignIdeas