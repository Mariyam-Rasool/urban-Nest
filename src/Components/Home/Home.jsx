// import styles from './Css/Home.module.css'
import NewArrivals from './NewArrivals'
import Category from './Category'
import DesignIdeas from './DesignIdeas'
import Hosting from './Hosting'
import HeroSection from '../HeroSection/HeroSection'

function Home() {
  return (
    <>
     <HeroSection></HeroSection>
     <NewArrivals></NewArrivals>
     <Category></Category>
     <Hosting></Hosting>
     <DesignIdeas></DesignIdeas>

    </>
  )
}

export default Home