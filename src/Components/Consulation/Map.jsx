import styles from './Css/Map.module.css'

function Map() {
  return (
    <iframe className={`${styles.map}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.727884410868!2d73.14449357244311!3d30.641625633977487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e4dde0c501%3A0xc37ea3d85326203!2sCOMSATS%20University%20Islamabad%20-%20Sahiwal%20Campus!5e0!3m2!1sen!2s!4v1723724671892!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default Map