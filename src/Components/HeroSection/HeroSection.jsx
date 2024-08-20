import styles from './Css/HeroSection.module.css'
import MainVideo from './MainVideo'

function Home() {
  return (
    <>
      <div className={`${styles.hero} container-fluid`}>
        <MainVideo></MainVideo>
     </div>
    </>
  )
}

export default Home