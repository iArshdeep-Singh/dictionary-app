import {Link} from "react-router-dom"
import './css/footer.css'

const Footer = () => {

    const auth = localStorage.getItem("user")

    return (
        <div id="footer">
            <div id="footer-nav">
                {auth ?
                    <>
                        <Link to="/about"><div className="footer-nav-links">About</div></Link>
                        <Link to="/contact"><div className="footer-nav-links">Contact</div></Link>
                        <Link to="/help"><div className="footer-nav-links">Help Center</div></Link>
                    </>
                    :
                    <></>}
            </div>
        </div>
    )
}

export default Footer