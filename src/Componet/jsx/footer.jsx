import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../footer.css'
import  logo  from '../../asset/logo.jpg'



export default function Footer(){
    return (

        <>
          <div className="footer">
            <ul>
                <li>Contact Us</li>
                <li>About us</li>
            </ul>

            <img src={logo} alt="" />

            <div className="social">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faDiscord} />
            </div>

          </div>
        
        
        </>



    )
}