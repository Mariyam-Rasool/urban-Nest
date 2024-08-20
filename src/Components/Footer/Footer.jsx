import styles from './Css/Footer.module.css'
import { footerLinks } from '../../Data/FooterData'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className={styles.background}>
        <div className={`${styles.container} container`}>
          <footer className={`${styles.footer} py-5`}>
            <div className="row">
              
            {footerLinks.map((items,index) =>(
            <div key={index} className="col-6 col-md-2 mb-3">
                <h5>{items.heading}</h5>
                <ul className="nav flex-column">
                {items.links.map((footerlink,index)=>(
                  <li key={index} className="nav-item mb-2">
                    <Link href={footerlink.link} className={`${styles.text} nav-link p-0 text-body-secondary`}>{footerlink.name}</Link></li>
                ))}
                </ul>
              </div>))}


              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>For new and unique ideas</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                    <button className={`${styles.button} btn`} type="button">Send</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2024 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
              </ul>
            </div>
          </footer>
      </div>
    </div>
  )
}

export default Footer