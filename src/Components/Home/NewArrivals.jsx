import {newArrivals} from '../../Data/HomePage/NewArrivalsData'
import { Swiper,SwiperSlide } from 'swiper/react'
import '../../../node_modules/swiper/swiper-bundle.min.css';
import '../../../node_modules/swiper/modules/navigation.min.css';
import { Navigation} from 'swiper/modules';
import styles from './Css/NewArrivals.module.css'
import { Link } from 'react-router-dom';


function NewArrivals() {
  return (
   
    <div className={`${styles.containerDiv} container-fluid text-center`}>
        <div className={styles.Heading}>New Arrivals</div>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          style={{
            // "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "lightgray",
          }}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            767:{
              slidesPerView:3
            },
            991:{
              slidesPerView:4
            }
          }}
          >
          <div  className={`${styles.row} row`}>
            
               { newArrivals.map((items,index)=>(
                //  <div  className={`${styles.col} col-lg-3 col-md-4 col-sm-6 mb-4`}>
                     
                    <SwiperSlide key={index} className={styles.sliderArrow}>
                      <Link className={`${styles.link}`}  to={`/product/${items.id}`}>
                        <div  className={`${styles.card} card`}>
                          <img src={items.img} className={`${styles.cardImg} card-img-top`} alt="..."/>
                          <div className={`${styles.cardBody} card-body`}>
                              <p className={`${styles.cardText} card-text`}>{items.pName}</p>
                              <p className={`${styles.cardText} card-text`}>${items.pPrice}</p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                // </div>
                ))}

          </div>
          </Swiper>

  
        <Link to="/products/all"><button className={styles.button} type='button'>SHOW NEW ARRIVALS</button></Link>
    </div>

  )
}

export default NewArrivals