import styles from './Css/IndividualProject.module.css'
// import { Link } from 'react-router-dom'
import { projectsDesc } from '../../Data/Projects/ProjectsData'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

function IndividualProject() {
    const {hash} = useLocation();
    useEffect(()=>{
        if (hash) {
            const element = document.getElementById(hash.replace("#",""));
            // if (element) {
            //     element.scrollIntoView({behavior:"smooth"})
            // }
            if (element) {
                const headerOffset = 130; // Adjust based on your header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            
        }
    },[hash])

  return (
    <div className={`${styles.containerDiv} container-fluid text-center`}>
        {projectsDesc.map((items,index)=>(
        <>
        <div id={items.id} className={styles.Heading}>{items.heading}</div>
        <div className={`${styles.row} row`}>
            
                
                <div key={index} className={`${styles.col} col-lg-12 mb-4`}>
                        <div className={`${styles.card} card`}>

                        <div className={`${styles.cardBody} card-body`}>
                                <p className={`${styles.cardText} ${styles.paraText} card-text`}>{items.desc}</p>
                        </div>

                         <div  id={`carouselExampleFade${index}`} className={`${styles.carousel} carousel slide carousel-fade`}>
                            <div className="carousel-inner">
                                
                                {items.images.map((img,imgIndex)=>(
                                    
                                <div key={imgIndex} className={` carousel-item ${imgIndex === 0 ? 'active' : ''}`}>
                                    <img src={img} className="d-block w-100" alt={`Slide ${imgIndex + 1}`}/>
                                </div>
                                ))}
                                
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleFade${index}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleFade${index}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            
                        </div>
                </div>
            </div>
            </>
            ))}
        </div>
  )
}

export default IndividualProject