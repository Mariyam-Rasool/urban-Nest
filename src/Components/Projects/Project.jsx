import styles from './Css/Project.module.css'
import { projectsNest } from '../../Data/Projects/ProjectsData'
import { Link } from 'react-router-dom'
function Project() {
    
  return (
    <div className={`${styles.containerDiv} container-fluid text-center`}>
        <div className={styles.Heading}>UrbanNest Projects</div>
        <div className={`${styles.row} row`}>
            
                {projectsNest.map((items,index)=>(
                <div key={index} className={`${styles.col} col-lg-4 col-md-6 col-sm-12 mb-4`}>
                    <Link to={`/individual-project#${items.id}`} className={styles.link}>
                        <div className={`${styles.card} card`}>
                            <img src={items.img} className={`${styles.cardImg} card-img-top`} alt={items.img}/>
                            <div className={`${styles.cardBody} card-body`}>
                                <p className={`${styles.cardText} ${styles.headingText} card-text`}>{items.heading}</p>
                                <p className={`${styles.cardText} ${styles.paraText} card-text`}>{items.para}</p>
                            </div>
                        </div>
                    </Link>
                </div>))}
            </div>
        </div>
  )
}

export default Project