import Layout from "../layout/Layout"
import contact from '../images/contact.jpg'
import './css/contact.css'

const Contact = () => {
    return (
        <Layout>
            <div id="contact-container">
                <div id="contact-photo">
                    <img id="contact-img" src={contact} alt="Contact Us" />
                </div>

                <div id="contact">
                    <h1>Contact Us</h1>
                    <p><b>Phone:</b> <span>+91 75270 70361</span></p>
                    <p><b>Mail:</b> <span>apsingh.hans@gmail.com</span></p>
                    <p><b>Phone:</b> <span>1800-0000-0000 (toll free)</span></p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact