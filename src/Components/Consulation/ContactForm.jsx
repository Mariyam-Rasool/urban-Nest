import styles from './Css/ContactForm.module.css'
import Map from './Map'

function ContactForm() {
  return (
    <>

    <Map></Map>
    <h2 className={`${styles.heading} text-uppercase text-center my-4`}>For booking and consultation contact us</h2>
    <form className={`${styles.form} container`} action="https://formspree.io/f/mgvwzvgp" method='POST'>
        <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput1" name='Username'  placeholder="Name" required autoComplete='off' />
        <div/>
        <div className="mb-3"></div>
            <input type="email" name='Email' className="form-control" id="exampleFormControlInput1" placeholder="name@email.com" autoComplete='off' />
        </div>
        <div className="mb-3">
            <textarea className="form-control"
            id="exampleFormControlTextarea1" name='Message' cols='30' rows="10" required autoComplete='off' placeholder='Enter your message'></textarea>
        </div>
        <div className="mb-3">
            <input className={`${styles.button}`} type="submit" value="SEND" />
        </div>
    </form>
    </>
  )
}

export default ContactForm