import styles from './Css/Category.module.css'
import { categoryItems } from '../../Data/HomePage/CategoryData'
import { Link } from 'react-router-dom'
function Category() {
  return (
    <div className={`${styles.containerDiv} container-fluid text-center`}>
        <div className={styles.Heading}>SHOP BY CATEGORY</div>
        <div className={`${styles.row} row`}>
            
                {categoryItems.map((items,index)=>(
                <div key={index} className={`${styles.col} col-lg-4 col-md-6 col-sm-12 mb-4`}>
                    <Link to={items.link} className={styles.link}>
                        <div className={`${styles.card} card`}>
                            <img src={items.img} className={`${styles.cardImg} card-img-top`} alt="imgage"/>
                            <div className={`${styles.cardBody} card-body`}>
                                <p className={`${styles.cardText} card-text`}>{items.para}</p>
                            </div>
                        </div>
                    </Link>
                </div>))}
            </div>
        </div>
       
    
  )
}

export default Category